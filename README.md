# Góc Đọc — Cải tiến thẻ sách bằng HTML/CSS

Bài cá nhân Chương 1 môn Phát triển ứng dụng TMĐT. Trang thực hành gồm bốn sách mẫu, tập trung vào cách trình bày tên sách, tác giả, phiên bản và giá.

## 1. Giới thiệu

Trong phiên khảo sát ngày 19/10/2026, tên dài của một số sách tại danh mục Văn học trên FAHASA bị thu gọn sau khoảng hai dòng. Thông tin bản in, hình thức bìa hoặc quà tặng ở cuối tên có thể bị khuất. Bản thực hành tách các thông tin này để khách đọc và đối chiếu rõ hơn.

## 2. Website tham khảo và khảo sát

- Website: [FAHASA](https://www.fahasa.com/).
- Nhóm sản phẩm khảo sát: sách, tập trung danh mục Văn học.
- Năm khu vực: trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- [Bảng khảo sát và các đường dẫn đối chiếu](KHAO_SAT.md).

Các nhận xét giới hạn trong phiên đã khảo sát; không phải kết luận về toàn bộ website hoặc mọi khách hàng.

## 3. Chức năng

- Hiển thị bốn sách, có hình minh họa, tên, tác giả, thông tin bản in và giá.
- Mở/đóng thông tin phiên bản bằng HTML `details` và `summary`.
- Trình bày giá bán tham khảo, giá bìa, tỷ lệ giảm và số tiền tiết kiệm.
- Bố cục bốn cột trên máy tính, hai cột trên máy tính bảng và một cột trên điện thoại.
- Mục “Hướng dẫn chọn sách” dẫn tới phần giải thích cách xem thông tin trước khi mua.
- Mục “Giới thiệu trang” dẫn tới phần giới thiệu ở cuối trang.
- Liên kết “Xem sách tại FAHASA” mở trang sản phẩm tương ứng.

Trang thực hành không có backend, tài khoản, giỏ hàng hoặc thanh toán riêng; không nhận đơn hàng.

## 4. Công nghệ và tài nguyên

- HTML5, CSS3; CSS đặt riêng trong `css/style.css`.
- Không sử dụng JavaScript, framework, cơ sở dữ liệu hoặc tài nguyên CDN.
- Bốn ảnh trong `images/` là SVG minh họa do Codex tạo, không phải bìa sách phát hành. Logo Góc Đọc được tạo cho bài thực hành.
- Tên sách và tác giả tham khảo các trang sản phẩm; giá ghi nhận ngày 19/10/2026, không tự cập nhật.

Nguồn sách minh họa:

- [Bí Mật Tối Thượng — Dan Brown](https://www.fahasa.com/bi-mat-toi-thuong-the-secret-of-secrets-bia-cung.html).
- [Người Đàn Ông Mang Tên Ove — Fredrik Backman](https://www.fahasa.com/nguoi-dan-ong-mang-ten-ove-tai-ban.html).
- [Trường Ca Achilles — Madeline Miller](https://www.fahasa.com/truong-ca-achilles.html).
- [Phía Đông Vườn Địa Đàng — John Steinbeck](https://www.fahasa.com/phia-dong-vuon-dia-dang.html).

## 5. Cách chạy

Mở `index.html` bằng Chrome hoặc trình duyệt khác. Giữ thư mục `css/` và `images/` cạnh file HTML. Không cần cài thư viện hoặc chạy lệnh build.

Trong VS Code: chọn File → Open Folder để mở thư mục chứa `index.html`. Live Server có thể dùng nếu đã cài, nhưng không bắt buộc.

- [Website GitHub Pages](https://quangduc-qidu.github.io/ptudtmdt-chuong1-fahasa-ui/).
- [Repository GitHub](https://github.com/QuangDuc-qidu/ptudtmdt-chuong1-fahasa-ui).

Repository lưu mã nguồn và tài liệu bài làm. GitHub Pages dùng để xem trực tiếp giao diện đã triển khai.

## 6. Cải tiến đã thực hiện

Tách tên tác phẩm khỏi thông tin phiên bản, bổ sung vùng mở thông tin đầy đủ, dùng CSS Grid và media query để điều chỉnh số cột. Tên chính không bị cắt bằng giới hạn hai dòng. Các phần giá được trình bày riêng; liên kết và vùng mở thông tin có trạng thái focus cho bàn phím.

Sau khi người học phản hồi rằng tên điều hướng khó hiểu, hai mục được đổi thành “Hướng dẫn chọn sách” và “Giới thiệu trang”; nội dung hướng dẫn cũng được viết lại rõ hơn.

## 7. Hỗ trợ từ AI và tự kiểm tra

Codex hỗ trợ khảo sát, phân tích, tạo HTML/CSS và SVG, chạy thử, chuẩn bị tài liệu và thao tác xuất bản trước đó. Người học chọn lĩnh vực, thống nhất phương án và góp ý về tên điều hướng, hướng dẫn sử dụng cùng chất lượng ảnh. Xem [nhật ký sử dụng AI](AI_USAGE.md).

Tôi đã tự mở trang và kiểm tra giao diện cùng các thao tác. Theo hướng dẫn của AI, tôi tự sửa nhãn “GỢI Ý” thành “GỢI Ý CHỌN SÁCH” trong index.html, lưu file, mở lại trên Chrome và cập nhật lên GitHub. Nhãn mới hiển thị đúng, không đè lên hình ở kích thước tôi kiểm tra. Quá trình hỗ trợ và chỉnh sửa được ghi trong AI_USAGE.md.

## 8. Cấu trúc file

```text
bai-ca-nhan-fahasa/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── bi-mat-toi-thuong.svg
│   ├── nguoi-dan-ong-ove.svg
│   ├── truong-ca-achilles.svg
│   └── phia-dong-vuon-dia-dang.svg
├── README.md
├── KHAO_SAT.md
└── AI_USAGE.md
```
