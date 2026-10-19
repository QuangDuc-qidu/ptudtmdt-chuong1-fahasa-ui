# Kết quả kiểm tra bản HTML và CSS

Ngày kiểm tra: **19/10/2026**. Người thực hiện các kiểm tra dưới đây: **Codex AI**, qua trình duyệt và kiểm tra file. Đây không phải phiếu xác nhận sinh viên đã tự chạy bài.

## 1. Kiểm tra giao diện thực tế

| Trường hợp | Kết quả đã quan sát |
| --- | --- |
| Truy cập bản mẫu qua máy chủ local | Trả HTTP 200, tải HTML và file CSS. |
| Bốn sản phẩm | Có đủ 4 `article` thẻ sách. |
| Ảnh sản phẩm | 4 SVG tải thành công, có mô tả `alt`. |
| Desktop 1366 px | 4 cột, tên chính không bị cắt, trang không tràn ngang. |
| Tablet 768 px | 2 cột, tên chính không bị cắt, trang không tràn ngang. |
| Điện thoại mô phỏng 390 px | 1 cột, tên chính không bị cắt, trang không tràn ngang. |
| Khung nhìn nhỏ 320 px | 1 cột, tên chính không bị cắt, trang không tràn ngang. |
| Chuột | Bấm `Thông tin phiên bản` mở nội dung đầy đủ. |
| Bàn phím | Phím Enter trên `summary` đóng rồi mở lại thông tin; quan sát được viền focus. |
| Kích thước vùng thao tác phiên bản | Tối thiểu 44 px ở desktop/tablet và 46 px ở khung nhìn nhỏ trong lần đo. |
| JavaScript | Trang không có thẻ script; thao tác mở phiên bản dùng HTML gốc của trình duyệt. |
| File và đường dẫn nội bộ | File HTML/CSS, bốn SVG và các tài liệu cần có đều tồn tại; ID không trùng, liên kết trong trang trỏ đúng ID. |
| Cú pháp ảnh SVG | Bốn file được đọc bằng bộ phân tích XML, không có lỗi cú pháp. |

Chi tiết số đo được lưu trong [ui-checks.json](preview/ui-checks.json). Chiều rộng nội dung có thể nhỏ hơn độ rộng khung nhìn yêu cầu vì thanh cuộn; kết quả không tràn ngang dựa trên so sánh `scrollWidth` và `clientWidth` của cùng trang.

Kết quả kiểm tra file: [file-checks.json](preview/file-checks.json). Đây là kiểm tra cấu trúc và đường dẫn, không phải chứng nhận toàn bộ HTML tuân thủ một bộ kiểm chuẩn bên ngoài.

## 2. Ảnh minh chứng bản cải tiến

- [Toàn trang desktop](preview/desktop.jpg).
- [Điện thoại tại thẻ đầu tiên, phiên bản đang mở](preview/mobile-card.jpg).
- [Toàn trang điện thoại](preview/mobile-full.jpg).

## 3. Điều chỉnh sau khi AI xem giao diện

- Tăng cỡ chữ phụ ở thẻ sách để đọc rõ hơn.
- Chuyển font tiêu đề sang Cambria/Times New Roman để dấu tiếng Việt hiển thị tốt trong trình duyệt kiểm tra.
- Dùng `min-height` thay vì giới hạn chiều cao tên, giữ các vùng giá thống nhất mà không cắt chữ.
- Giữ vùng mở thông tin có độ cao thao tác phù hợp và viền focus dễ thấy.

Các điều chỉnh này do AI phát hiện và thực hiện, không dùng để điền thay mục sinh viên tự phát hiện/chỉnh sửa.

## 4. Giới hạn kiểm tra

Đã kiểm tra trong một trình duyệt với các kích thước mô phỏng, chưa kiểm tra trên điện thoại vật lý, nhiều trình duyệt hoặc với người dùng thật. Chưa chạy trên GitHub Pages. Không có backend, tìm kiếm, giỏ hàng hoặc thanh toán riêng để kiểm thử nghiệp vụ.

Sinh viên cần tự chạy và ghi kết quả tại [phiếu tự kiểm tra](TU_KIEM_TRA_CA_NHAN.md).
