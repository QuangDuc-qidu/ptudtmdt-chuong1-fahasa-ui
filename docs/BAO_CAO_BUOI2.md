# Báo cáo thực hành Buổi 2 — Góc Đọc

## Bước 1. Lựa chọn khu vực

Tiếp tục danh sách bốn sách của Buổi 1. Mã gốc lưu trong `before/`. Bảng tại README xác định ba vấn đề: lệch hàng khi mở thông tin, cỡ chữ phụ nhỏ, phản hồi tương tác chưa rõ. Phạm vi chỉ là khu vực thẻ sách, không xây thêm website hoặc backend.

## Bước 2. HTML5

| Phần tử | Vị trí | Lý do sử dụng |
|---|---|---|
| `header`, `nav` | Logo và liên kết đầu trang | Phân biệt phần mở đầu với điều hướng |
| `main` | Nội dung chính | Đánh dấu nội dung chính của trang |
| `section` | Tủ sách, hướng dẫn chọn sách | Các phần có chủ đề và tiêu đề riêng |
| `article` | Mỗi thẻ sách | Mỗi thẻ có thể đọc riêng |
| `h1`, `h2`, `h3` | Trang → khu vực → tên sách | Thể hiện thứ bậc nội dung |
| `details`, `summary` | Thông tin phiên bản | Mở/đóng bằng điều khiển HTML có sẵn và hỗ trợ bàn phím |
| `img` và `alt` | Bìa sách | Mô tả thay thế, ghi rõ bìa minh họa |
| `a` | Điều hướng, link FAHASA | Dẫn đến địa chỉ có thật |
| `time` | Ngày ghi nhận giá | Buổi 2 bổ sung `datetime="2026-10-19"` để biểu diễn ngày rõ ràng |
| `footer` | Cuối trang | Nêu nguồn, giới hạn và tài liệu |

Các `id` là duy nhất. `article` tham chiếu tên qua `aria-labelledby`. Buổi 2 thêm `aria-describedby="catalog-note"` cho vùng sách để liên kết phần lưu ý về giá và ảnh. Các thẻ ngữ nghĩa đã có từ Buổi 1 được giữ lại, không coi toàn bộ cấu trúc là mới tạo.

## Bước 3. CSS ngoài

HTML tải `css/style.css` qua thẻ `link`. Không cần Internet để tải CSS và bìa minh họa. Biến màu trong `:root` giữ màu xanh đậm, nền kem và màu nhấn cam nhất quán. Kiểu chữ và quy tắc chung đặt ở đầu file. Ảnh có kích thước giới hạn và `object-fit: contain` để giữ tỷ lệ. Không dùng Bootstrap, Tailwind hoặc JavaScript.

## Bước 4. Selector và Box Model

- Selector phần tử: `body`, `img`, `h1` chọn theo tên thẻ.
- Selector class: `.book-card`, `.book-action` chọn theo class.
- Selector hậu duệ: `.book-content h3` chọn `h3` nằm trong vùng nội dung thẻ.

```css
.book-content { padding: 20px; }
.book-card { border: 1px solid #e1e0d6; border-radius: 14px; }
.edition-tag { margin-top: 14px; padding: 4px 8px; }
```

`padding` là khoảng cách bên trong phần tử; `margin` là khoảng cách bên ngoài. Với nhãn phiên bản, padding tạo vùng nền quanh chữ, margin-top tách nhãn khỏi nội dung phía trên. Khoảng cách giữa các thẻ là `gap: 20px` của Grid. `box-sizing: border-box` làm kích thước khai báo bao gồm padding và border; margin nằm ngoài. `border-radius` chỉ bo góc.

Bản mới tăng padding vùng nội dung thành 20 px; nhãn phiên bản, mức giảm và giá bìa tăng từ 11 lên 12 px. Nhãn bìa trên ảnh được tăng từ 10 lên 12 px; giữ nguyên padding và vị trí để thay đổi có phạm vi nhỏ. Nhãn vẫn nằm trong thẻ ở ba độ rộng đã kiểm tra.

## Bước 5. Flexbox

Flexbox được dùng ở menu, hàng giá và nút; Buổi 2 thêm Flexbox theo cột cho thẻ.

```css
.book-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
```

Trong hướng mặc định `row`, `justify-content` căn theo chiều ngang, `align-items` căn theo chiều dọc. `space-between` đưa chữ và mũi tên về hai phía khi còn khoảng trống. Nếu đổi thành `center`, chúng tụ lại giữa; `flex-start` gom về đầu hàng. `gap` giữ khoảng cách giữa các phần. Thử nghiệm ngày 04/11/2026 trên bản sao ở 1366 px: đổi riêng `justify-content` của `.book-action` từ `space-between` thành `center`; chữ và mũi tên tụ về giữa, vẫn cách nhau 8 px. Bản chính giữ `space-between` để hai phần nằm hai phía. [Ảnh biến thể center](../screenshots/experiment-flex-center.png).

```css
.book-card { display: flex; flex-direction: column; }
.book-content { display: flex; flex-direction: column; flex: 1; }
.price-block { margin-top: auto; }
```

Ở hướng `column`, trục chính là chiều dọc. Vùng nội dung nhận khoảng trống còn lại; margin tự động phía trên giá đẩy giá và nút xuống. Không đặt chiều cao cố định cho văn bản hoặc cắt tên sách. Khi mở chi tiết, hàng thẻ cao hơn để chứa đủ nội dung.

## Bước 6. CSS Grid

```css
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
  gap: 20px;
}
```

Grid quản lý các cột và hàng. `repeat(4, ...)` tạo bốn cột; `1fr` chia phần không gian còn lại; `minmax(0, 1fr)` cho cột co lại thay vì bị nội dung kéo tràn. `stretch` kéo thẻ cùng hàng theo chiều cao thẻ cao nhất. Bản cũ dùng `start`, nên các thẻ còn lại không cao theo khi mở chi tiết một thẻ.

Giữ bốn cột ở màn hình lớn để hiển thị bốn sách của bài cũ. Chiều rộng tối đa 1050 px chuyển hai cột; tối đa 600 px chuyển một cột. Ảnh 768 px minh họa Grid hai cột. Thử nghiệm ngày 04/11/2026 trên bản sao ở 1366 px với `repeat(3, minmax(0, 1fr))` cho ba thẻ hàng đầu và sách thứ tư xuống hàng hai. Bản chính giữ bốn cột. Hai cột được kiểm tra thực tế ở 768 px. [Ảnh ba cột](../screenshots/experiment-grid-three.png), [ảnh hai cột](../screenshots/final-768.png).

## Bước 7. Hover, transition và focus

Nút `.book-action` chuyển sang nền xanh đậm và chữ sáng khi hover hoặc focus bàn phím. Transition 0,2 giây áp dụng riêng cho màu nền, màu chữ và màu viền. Giữ viền focus màu cam, không xóa outline.

“Thông tin phiên bản” được gạch chân khi hover; dấu cộng xoay khi mở. Quy tắc `prefers-reduced-motion` kế thừa từ Buổi 1 tắt transition nếu người dùng yêu cầu giảm chuyển động.

## Bước 8. Kiểm tra và tự sửa

Lỗi được xử lý thêm: nhãn “Bìa cứng/Bìa mềm” có `font-size: 10px`, khó đọc hơn các thông tin còn lại. Sửa duy nhất cỡ chữ trong `.binding-label` thành `12px`. Dự đoán trước kiểm tra: nhãn rộng và cao hơn, vị trí góc dưới bên trái không đổi. Kết quả trình duyệt: cả bốn nhãn nhận cỡ chữ 12 px, không vượt thẻ ở 1366, 768 và 390 px.

- [Trước khi tăng nhãn](../screenshots/label-before.png).
- [Sau khi hoàn thiện](../screenshots/final-desktop.png).
- [Báo cáo kiểm thử và các lỗi đã sửa](KIEM_THU.md).

Codex đã hỗ trợ lượt sửa nhãn, thực nghiệm và kiểm thử bổ sung được mô tả ở trên. Ngày 04/11/2026, Nguyễn Quang Đức xác nhận đã tự sửa nhãn bìa từ 10 lên 12 px và mở trang kiểm tra. Các số đo và ảnh kiểm thử nhiều kích thước vẫn được ghi là kết quả của Codex. Xem [nhật ký AI](../AI_USAGE.md), mục 7.5, để phân biệt phần sinh viên xác nhận tự thực hiện.
