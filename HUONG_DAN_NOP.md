# Hướng dẫn kiểm tra và đưa bài lên GitHub

## 1. Trước khi đưa lên GitHub

1. Mở `index.html` bằng Chrome và đọc bài tại `README.md`.
2. Kiểm tra lại bảng khảo sát, thay nhận xét nào không còn đúng với website thực tế.
3. Tự chỉnh ít nhất một điểm do bạn phát hiện, ghi rõ trong `docs/TU_KIEM_TRA_CA_NHAN.md`.
4. Đọc `AI_USAGE.md`, giữ thông tin khai báo đúng với mức hỗ trợ thực tế.

## 2. Repository cá nhân

Đề bài yêu cầu repository **riêng, Public**. Nếu chưa được tạo, có thể dùng tên `ptudtmdt-chuong1-fahasa-ui`.

Mở GitHub bằng tài khoản của bạn, chọn **New repository**, chọn Public, nhập tên và mô tả. Nếu đã có toàn bộ các file ở máy, không tạo thêm README, license hoặc `.gitignore` trên GitHub để tránh hai lịch sử độc lập.

Trong VS Code mở đúng thư mục chứa `index.html`. Dùng Terminal để đưa bài lên GitHub. Nếu thư mục đã được khởi tạo Git bởi AI, bỏ qua `git init` và kiểm tra `git status` trước.

```powershell
git init
git add .
git commit -m "Add book card UI improvement and survey"
git branch -M main
```

Sau đó dùng URL **thật** hiển thị trong repository của bạn để chạy `git remote add origin URL_THAT` và `git push -u origin main`. Không dán nguyên chữ `URL_THAT`; thay bằng đường dẫn vừa tạo.

Nếu Git hỏi danh tính commit, khai báo tên/email của bạn trong repository này bằng `git config user.name` và `git config user.email`. Tên/email commit khác với bước đăng nhập GitHub. Khi được yêu cầu xác thực, dùng luồng đăng nhập GitHub trên trình duyệt; không gửi mật khẩu hoặc mã xác thực vào chat.

## 3. Cách dùng giao diện VS Code

Cũng có thể mở **Source Control**, tạo commit rồi chọn **Publish to GitHub**, đăng nhập tài khoản và chọn **Public repository**. Kiểm tra kỹ thư mục bài làm để không đăng các file riêng tư ngoài bài.

## 4. GitHub Pages nếu muốn có link chạy trực tiếp

Trong repository, vào **Settings → Pages**, chọn nguồn từ nhánh `main`, thư mục `/ (root)`, rồi lưu. Khi GitHub hiển thị URL, mở URL đó và kiểm tra ảnh/CSS.

GitHub Pages là bước bổ sung theo tài liệu bài tập. Repository Public để xem source là yêu cầu bắt buộc. Không cần triển khai lên một dịch vụ hosting trả phí.

## 5. Kiểm tra cuối và nộp LMS

- Repository Public, mở được source và README.
- File `index.html`, `css/style.css` và bốn ảnh SVG có đủ.
- Bảng khảo sát đủ năm phần; có giải thích vấn đề và cải tiến.
- Có nhật ký AI và phần tự kiểm tra thực tế của sinh viên.
- Nếu dùng Pages, link chạy đúng và không mất ảnh/CSS.
- PDF đề bài chưa nêu rõ ô nộp LMS cần link, ZIP hay tài liệu khác. Xem hướng dẫn tại **bài tập cá nhân** trên LMS và nộp đúng định dạng/hạn hiển thị ở đó; không lấy hạn bài nhóm áp sang bài cá nhân.

Tài liệu thao tác chính thức: [GitHub trong VS Code](https://code.visualstudio.com/docs/sourcecontrol/github), [GitHub Pages](https://docs.github.com/en/pages).
