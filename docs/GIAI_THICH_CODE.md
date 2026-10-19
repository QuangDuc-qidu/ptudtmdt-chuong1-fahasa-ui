# Giải thích HTML và CSS cho người mới học

## 1. Hai file quan trọng nhất

- `index.html` mô tả nội dung và cấu trúc: tiêu đề, thẻ sách, ảnh, giá, liên kết.
- `css/style.css` quy định hình thức: màu, cỡ chữ, khoảng cách và cách chia cột.

Dòng `<link rel="stylesheet" href="css/style.css">` trong phần `head` nối hai file. `href` là đường dẫn tương đối từ `index.html`; vì vậy cần giữ nguyên cấu trúc thư mục.

## 2. Cấu trúc một thẻ sách

Mỗi sách nằm trong một `<article class="book-card">` và có tên riêng qua `aria-labelledby`. Phần `book-visual` chứa ảnh; phần `book-content` chứa chữ và giá.

| Thành phần | Vai trò trong bài |
| --- | --- |
| `article` | Gom nội dung độc lập của một cuốn sách. |
| `h1`, `h2`, `h3` | Tiêu đề trang, tiêu đề khu vực và tên từng cuốn sách. |
| `img src="images/...svg"` | Tải ảnh từ thư mục; `alt` mô tả ảnh khi không xem được hoặc dùng trình đọc màn hình. |
| `details` và `summary` | Vùng có thể mở/đóng để đọc thông tin phiên bản. Trình duyệt xử lý thao tác, không cần JavaScript. |
| `strong` | Làm rõ giá tham khảo. |
| `del` | Gạch ngang giá bìa để phân biệt với giá hiện tại được ghi nhận. |
| `a href="..."` | Liên kết đến khu vực trong trang hoặc trang sách nguồn. |

Liên kết `href="#tu-sach"` đi đến phần có `id="tu-sach"`. Liên kết `https://www.fahasa.com/...` mở trang ngoài. `target="_blank"` mở tab mới; `rel="noopener noreferrer"` hạn chế quyền tương tác giữa tab và không gửi referrer.

## 3. Vì sao tên sách không bị cắt?

Bản mẫu đặt tên chính vào `h3`, còn phiên bản và tên đầy đủ vào các phần riêng. CSS không đặt `overflow: hidden`, giới hạn hai dòng hoặc chiều cao cố định lên tên chính.

`min-height: 2.6em` chỉ đặt **chiều cao tối thiểu**, giúp các thẻ ngắn có vị trí tương đối thống nhất. Nếu tên cần nhiều dòng, vùng tên vẫn được cao thêm. `overflow-wrap: anywhere` cho phép chuỗi rất dài xuống dòng thay vì đẩy tràn ngang.

## 4. CSS Grid và media query

```css
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
```

`repeat(4, ...)` tạo bốn cột bằng nhau. `minmax(0, 1fr)` cho phép cột co lại trong khung chứa, tránh để một chuỗi dài ép cột rộng hơn trang.

Hai media query cuối file đổi số cột:

- Tối đa 1050 px: hai cột.
- Tối đa 600 px: một cột.

Độ rộng càng nhỏ thì thẻ càng cần đủ chỗ để đọc. Một cột làm trang dài hơn nhưng giúp đọc tên và phiên bản rõ hơn; đây là lựa chọn thiết kế có đánh đổi.

## 5. Một số quy tắc còn lại

- `box-sizing: border-box`: chiều rộng phần tử bao gồm padding và border, giúp tính bố cục dễ hơn.
- `object-fit: contain`: giữ trọn hình bìa trong khung ảnh.
- `:focus-visible`: hiện viền rõ khi điều hướng bằng bàn phím.
- `.skip-link`: cho phép người dùng bàn phím đi thẳng đến danh sách sách.
- `prefers-reduced-motion`: bỏ chuyển động khi thiết bị yêu cầu giảm hiệu ứng.
- Biến `--ink`, `--paper`, `--accent` trong `:root`: đổi màu dùng chung tại một nơi.

## 6. Vì sao chưa có giỏ hàng hoạt động?

Phần được chọn là cải tiến **cách trình bày thẻ sách**, không phải xử lý đơn hàng. Mỗi thẻ dùng nút liên kết tới sách thật trên FAHASA; việc thêm giỏ và thanh toán không được mô phỏng thành chức năng đã hoàn thành.

## 7. Tự giải thích trước khi nộp

Tự mở code, chỉ ra vị trí có thể đổi tên sách, tác giả, ảnh và giá. Giải thích vì sao sửa tên file ảnh cần sửa cả `src`, và vì sao đổi giá cần tính lại tiền tiết kiệm cùng phần trăm giảm.

Sau đó mở một phần `Thông tin phiên bản` bằng chuột và bằng phím Enter. Đổi độ rộng màn hình để nhận ra lúc chuyển 4 → 2 → 1 cột. Ghi điểm bạn tự phát hiện và thực sự đã sửa vào phiếu tự kiểm tra.
