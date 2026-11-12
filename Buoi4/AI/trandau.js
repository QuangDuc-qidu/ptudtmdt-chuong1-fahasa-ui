/* Bài 6 — giao diện và hoạt ảnh riêng; không chạy lại vòng while/alert của anhhung.js.
 * Luật đánh theo đoạn code mẫu trang 31: random*100 > né, random*100 < trí tuệ.
 * Chí mạng gây thêm 2 lần sức mạnh, tức tổng cộng 3 lần khi đòn đánh trúng.
 */
'use strict';
(() => {
  const NAME = 'Nguyễn Quang Đức';
  const $ = (id) => document.getElementById(id);
  const elements = {
    arena: $('arena'), hero: $('hero-box'), dragon: $('dragon-box'),
    turn: $('btn-turn'), auto: $('btn-auto'), start: $('btn-start'),
    log: $('combat-log'), status: $('arena-status'), dialog: $('setup-dialog')
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hero = null;
  let dragon = null;
  let round = 0;
  let busy = false;
  let finished = false;
  let auto = false;
  let generation = 0; // Đổi phiên mỗi khi tạo nhân vật, hủy tác động của lượt cũ.
  let autoTimer = null;
  let audio = null;
  let soundEnabled = false;

  // 1. Tính chỉ số theo các bước trong anhhung.js gốc.
  function createHero(enteredName, choice) {
    let level = 1, xp = 0, skillPoint = 5;
    level++;
    xp = 150 * (level - 1) + 200;
    skillPoint += xp / 10;
    let strength = 0.6 * skillPoint + 0.1 * xp;
    let agility = 0.2 * skillPoint + 0.2 * xp;
    let intel = 0.2 * skillPoint + 10 * level;
    level = 3;
    xp += 300; // Giữ công thức và trình tự của file gốc được cung cấp.
    const nameMatched = enteredName === NAME;
    intel += nameMatched ? 5 : -5;
    let role = 'Tập sự';
    switch (choice) {
      case 'a': role = 'Chiến binh'; strength += 15; agility -= 10; intel -= 5; break;
      case 'b': role = 'Sát thủ'; strength -= 15; agility += 10; intel += 5; break;
      case 'c': role = 'Thợ săn'; strength -= 15; intel += 15; break;
    }
    level = 4;
    xp += 700;
    level = 5;
    return {name: NAME, role, level, xp, skillPoint, strength, agility, intel,
      health: level + 100, maxHealth: level + 100, nameMatched};
  }

  // 2. Âm thanh tổng hợp bằng Web Audio, không cần tải tệp bên ngoài.
  async function enableAudio() {
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('Trình duyệt chưa hỗ trợ Web Audio.');
      audio ??= new Audio();
      if (audio.state === 'suspended') await audio.resume();
      return audio.state === 'running';
    } catch (error) {
      soundEnabled = false;
      updateSoundButton();
      elements.status.textContent = 'Chưa bật được âm thanh; bạn vẫn có thể chơi bình thường.';
      return false;
    }
  }
  function updateSoundButton() {
    $('sound-toggle').setAttribute('aria-pressed', String(soundEnabled));
    $('sound-toggle').querySelector('span').textContent = 'Âm thanh: ' + (soundEnabled ? 'Bật' : 'Tắt');
  }
  function tone(frequency, endFrequency, duration, waveform = 'sine', delay = 0, volume = 0.07) {
    if (!soundEnabled || !audio || audio.state !== 'running') return;
    const osc = audio.createOscillator(), gain = audio.createGain();
    const now = audio.currentTime + delay;
    osc.type = waveform;
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(endFrequency, now + duration);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain); gain.connect(audio.destination);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
    osc.start(now); osc.stop(now + duration + 0.02);
  }
  function playSound(kind) {
    if (kind === 'sword') tone(950, 120, 0.2, 'sawtooth');
    if (kind === 'fire') { tone(130, 35, 0.45, 'sawtooth'); tone(64, 30, 0.4, 'triangle', 0.04); }
    if (kind === 'critical') { tone(700, 70, 0.3, 'square', 0, 0.045); tone(110, 40, 0.3, 'triangle', 0.08); }
    if (kind === 'miss') tone(290, 680, 0.18, 'sine', 0, 0.04);
    if (kind === 'win') [392, 494, 587, 784].forEach((n, i) => tone(n, n, 0.3, 'triangle', i * 0.13));
    if (kind === 'lose') [196, 165, 130].forEach((n, i) => tone(n, n * 0.8, 0.35, 'triangle', i * 0.18));
  }

  // 3. Nhật ký, máu, trạng thái điều khiển.
  function addLog(text, kind = '') {
    const entry = document.createElement('li');
    entry.className = 'log-' + kind;
    entry.textContent = text; // Không dùng innerHTML cho tên người nhập.
    elements.log.append(entry);
    elements.log.scrollTop = elements.log.scrollHeight;
  }
  function updateHealth() {
    for (const [id, fighter] of [['hero', hero], ['dragon', dragon]]) {
      if (!fighter) continue;
      const health = Math.max(0, fighter.health);
      $(id + '-hp-bar').style.width = (health / fighter.maxHealth * 100) + '%';
      $(id + '-hp-text').textContent = `${health} / ${fighter.maxHealth}`;
      $(id + '-health-meter').setAttribute('aria-valuenow', health);
    }
  }
  function updateControls() {
    elements.turn.disabled = !hero || finished || busy || auto;
    elements.auto.disabled = !hero || finished;
    elements.auto.textContent = auto ? 'Ⅱ Dừng tự động' : '▷ Tự động';
    elements.auto.setAttribute('aria-pressed', String(auto));
    elements.start.disabled = busy || auto;
  }
  function animate(node, className) {
    node.classList.remove(className); void node.offsetWidth;
    node.classList.add(className);
    const token = generation;
    setTimeout(() => { if (token === generation) node.classList.remove(className); }, 620);
  }
  function floating(target, text, kind = '') {
    const box = target.getBoundingClientRect(), arena = elements.arena.getBoundingClientRect();
    const label = document.createElement('span');
    label.className = 'damage-number ' + kind;
    label.textContent = text;
    label.style.left = (box.left - arena.left + box.width / 2) + 'px';
    label.style.top = (box.top - arena.top + box.height * 0.32) + 'px';
    $('float-layer').append(label);
    setTimeout(() => label.remove(), 1250);
  }

  // 4. Hạt sáng văng tại vị trí trúng đòn; chỉ là hình ảnh, không tính sát thương.
  const canvas = $('particles'), context = canvas.getContext('2d');
  let particles = [], frame = null;
  function renderParticles() {
    frame = null;
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.life -= 0.025;
      context.globalAlpha = Math.max(0, p.life); context.fillStyle = p.color;
      context.beginPath(); context.arc(p.x, p.y, p.size, 0, Math.PI * 2); context.fill();
    }
    context.globalAlpha = 1;
    if (particles.length) frame = requestAnimationFrame(renderParticles);
  }
  function sparks(target, critical) {
    if (!context || reducedMotion) return;
    const area = elements.arena.getBoundingClientRect(), box = target.getBoundingClientRect();
    canvas.width = area.width; canvas.height = area.height;
    for (let i = 0; i < (critical ? 36 : 20); i++) {
      const angle = i * 2.39996, speed = 2 + (i % 5);
      particles.push({x:box.left - area.left + box.width * 0.45,
        y:box.top - area.top + box.height * 0.45, vx:Math.cos(angle) * speed,
        vy:Math.sin(angle) * speed - 1, life:1, size:1 + i % 3,
        color: i % 2 ? '#e5c483' : '#e98d57'});
    }
    if (frame === null) frame = requestAnimationFrame(renderParticles);
  }
  const wait = ms => new Promise(resolve => setTimeout(resolve, reducedMotion ? Math.min(ms, 55) : ms));

  // 5. Mỗi lượt: anh hùng tấn công, kiểm tra rồng, rồi mới cho rồng phản công.
  // Dùng async để hình ảnh kịp vẽ; vòng while và alert vẫn giữ ở bản bài cơ bản.
  async function playTurn() {
    if (!hero || finished || busy) return;
    const token = generation;
    busy = true; round++;
    $('round-count').textContent = String(round).padStart(2, '0');
    updateControls(); addLog('LƯỢT ' + String(round).padStart(2, '0'), 'round');
    try {
      elements.status.textContent = 'Anh hùng ra đòn…';
      animate(elements.hero, 'lunge'); animate($('sword-trail'), 'slash');
      await wait(300); if (token !== generation) return;
      if (Math.random() * 100 > dragon.agility) {
        const critical = Math.random() * 100 < hero.intel;
        const damage = hero.strength + (critical ? hero.strength * 2 : 0);
        dragon.health = Math.max(0, dragon.health - damage);
        animate(elements.dragon, 'hurt'); animate(elements.dragon, 'recoil');
        floating(elements.dragon, (critical ? 'CHÍ MẠNG −' : '−') + damage, critical ? 'crit' : '');
        sparks(elements.dragon, critical); playSound(critical ? 'critical' : 'sword');
        if (critical) animate(elements.arena, 'shake');
        addLog(critical ? `TRẢM LONG! ${hero.strength} sát thương + ${hero.strength * 2} chí mạng = ${damage}.` : `TRẢM LONG! Anh hùng gây ${damage} sát thương.`, 'hero');
      } else {
        animate(elements.dragon, 'dodge'); floating(elements.dragon, 'RỒNG NÉ ĐÒN', 'miss');
        playSound('miss'); addLog('XÍ HỤT! Rồng né được đòn tấn công.', 'miss');
      }
      updateHealth();
      if (dragon.health <= 0) { finish(true); return; }
      await wait(650); if (token !== generation) return;
      elements.status.textContent = 'Rồng Già phản công…';
      const arenaRect = elements.arena.getBoundingClientRect();
      const dragonRect = elements.dragon.getBoundingClientRect();
      const heroRect = elements.hero.getBoundingClientRect();
      const projectile = $('projectile');
      const startX = dragonRect.left - arenaRect.left + dragonRect.width * 0.18;
      const startY = dragonRect.top - arenaRect.top + dragonRect.height * 0.47;
      projectile.style.left = startX + 'px'; projectile.style.top = startY + 'px';
      projectile.style.setProperty('--fire-x', (heroRect.left - arenaRect.left + heroRect.width * 0.5 - startX) + 'px');
      projectile.style.setProperty('--fire-y', (heroRect.top - arenaRect.top + heroRect.height * 0.48 - startY) + 'px');
      animate(projectile, 'fire');
      await wait(350); if (token !== generation) return;
      if (Math.random() * 100 > hero.agility) {
        const critical = Math.random() * 100 < dragon.intel;
        const damage = dragon.strength + (critical ? dragon.strength * 2 : 0);
        hero.health = Math.max(0, hero.health - damage);
        animate(elements.hero, 'hurt'); animate(elements.hero, 'recoil'); animate(elements.arena, 'shake');
        floating(elements.hero, (critical ? 'CHÍ MẠNG −' : '−') + damage, critical ? 'crit' : '');
        sparks(elements.hero, critical); playSound('fire');
        addLog(critical ? `HỎA CẦU! ${dragon.strength} sát thương + ${dragon.strength * 2} chí mạng = ${damage}.` : `HỎA CẦU! Rồng gây ${damage} sát thương.`, 'dragon');
      } else {
        animate(elements.hero, 'dodge'); floating(elements.hero, 'NÉ THÀNH CÔNG', 'miss');
        playSound('miss'); addLog('NÉ THÀNH CÔNG! Anh hùng tránh được hỏa cầu.', 'miss');
      }
      updateHealth();
      if (hero.health <= 0) { finish(false); return; }
      await wait(400); if (token !== generation) return;
      elements.status.textContent = 'Chọn đánh tiếp hoặc bật tự động để tiếp tục.';
    } finally {
      if (token === generation) {
        busy = false; updateControls();
        if (auto && !finished) autoTimer = setTimeout(playTurn, reducedMotion ? 65 : 650);
      }
    }
  }

  function finish(won) {
    finished = true; auto = false; clearTimeout(autoTimer);
    (won ? elements.dragon : elements.hero).classList.add('defeated');
    if (won) { hero.level = 6; hero.xp += 600; $('hero-level').textContent = 'LV. 6'; $('stat-xp').textContent = hero.xp; }
    const title = won ? 'Dũng sĩ diệt rồng.' : 'Hành trình chưa dừng lại.';
    $('result-kicker').textContent = won ? 'CHIẾN THẮNG' : 'THẤT BẠI';
    $('result-title').textContent = title;
    $('result-description').textContent = won ? `Bạn đánh bại Rồng Già sau ${round} lượt. Lên cấp 6 và nhận thêm 600 XP.` : `Trận đấu kết thúc sau ${round} lượt. Hãy thử lại hoặc chọn một phân lớp khác.`;
    $('result-overlay').hidden = false;
    elements.status.textContent = won ? 'Anh hùng đã chiến thắng.' : 'Anh hùng đã hết máu.';
    addLog((won ? 'CHIẾN THẮNG! Cấp 6, +600 XP.' : 'THẤT BẠI! Anh hùng hết máu.') + ` Trận đấu kết thúc ở lượt ${round}.`, 'result');
    playSound(won ? 'win' : 'lose');
    $('play-again').focus();
    updateControls();
  }

  // 6. Khởi tạo và các nút tương tác.
  function openSetup() { if (!busy && !auto) { elements.dialog.showModal(); $('player-name').focus(); } }
  elements.start.addEventListener('click', openSetup);
  $('play-again').addEventListener('click', openSetup);
  $('view-result').addEventListener('click', () => { $('result-overlay').hidden = true; elements.start.focus(); });
  $('close-setup').addEventListener('click', () => elements.dialog.close());
  $('setup-form').addEventListener('submit', event => {
    event.preventDefault();
    const enteredName = $('player-name').value;
    if (!enteredName.trim()) { $('player-name').setCustomValidity('Hãy nhập họ và tên.'); $('player-name').reportValidity(); return; }
    generation++; clearTimeout(autoTimer); auto = false; busy = false; finished = false; round = 0;
    hero = createHero(enteredName, new FormData(event.currentTarget).get('heroClass'));
    dragon = {health:600, maxHealth:600, strength:100, agility:15, intel:80};
    elements.log.replaceChildren(); $('float-layer').replaceChildren();
    particles = []; if (frame !== null) { cancelAnimationFrame(frame); frame = null; }
    if (context) context.clearRect(0, 0, canvas.width, canvas.height);
    for (const node of [elements.hero, elements.dragon]) node.classList.remove('hurt', 'recoil', 'lunge', 'dodge', 'defeated');
    $('result-overlay').hidden = true;
    $('hero-role').textContent = hero.role.toUpperCase(); $('hero-level').textContent = 'LV. 5';
    $('round-count').textContent = '00';
    $('stat-strength').textContent = hero.strength;
    $('stat-agility').textContent = hero.agility + '%'; $('stat-intel').textContent = hero.intel + '%'; $('stat-xp').textContent = hero.xp;
    addLog(hero.nameMatched ? 'Tên chính xác: +5 điểm trí tuệ.' : 'Tên chưa khớp: −5 điểm trí tuệ.', 'intro');
    addLog(`${hero.name} · ${hero.role} · Cấp 5. STR ${hero.strength}, AGI ${hero.agility}, INT ${hero.intel}.`, 'hero');
    addLog('Rồng Già: 600 HP, 100 sức mạnh, 15% né, 80% chí mạng.', 'dragon');
    updateHealth(); updateControls(); elements.dialog.close();
    elements.status.textContent = 'Nhân vật đã sẵn sàng. Nhấn Đánh một lượt để xuất trận.';
    elements.turn.focus();
  });
  $('player-name').addEventListener('input', () => $('player-name').setCustomValidity(''));
  elements.turn.addEventListener('click', () => { if (!auto) void playTurn(); });
  elements.auto.addEventListener('click', () => {
    auto = !auto; clearTimeout(autoTimer); updateControls();
    if (auto && !busy) void playTurn();
    if (!auto && !busy) elements.status.textContent = 'Đã dừng tự động. Bạn có thể đánh từng lượt.';
  });
  $('sound-toggle').addEventListener('click', async () => {
    if (soundEnabled) soundEnabled = false;
    else soundEnabled = await enableAudio();
    updateSoundButton(); if (soundEnabled) tone(440, 660, 0.15, 'triangle');
  });
  updateControls();
})();
