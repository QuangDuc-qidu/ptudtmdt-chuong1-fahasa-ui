# Khảo sát năm khu vực của website FAHASA

## 1. Thông tin chung

- Tên website: FAHASA.
- URL: https://www.fahasa.com/.
- Ngày khảo sát: **19/10/2026**, múi giờ Việt Nam.
- Sản phẩm khảo sát: sách, tập trung danh mục Văn học. Website còn kinh doanh các nhóm hàng khác.
- Khách hàng mục tiêu dự kiến: người có nhu cầu tìm và mua sách trực tuyến; đây là suy luận từ ngành hàng và luồng mua sắm, không phải kết quả phỏng vấn khách hàng.
- Các chức năng quan sát: duyệt danh mục, lọc giá, xem chi tiết, tìm kiếm, thêm sách vào giỏ, chọn sản phẩm trong giỏ, tăng số lượng và xóa.
- Phương pháp: AI sử dụng trình duyệt để đọc giao diện, thao tác thử và chụp minh chứng; kiểm tra desktop 1366 px và mô phỏng khung nhìn 390 px. Không đăng nhập FAHASA và không đặt mua hàng.
- Sinh viên cần xem lại các trang và xác nhận hoặc điều chỉnh nhận xét trước khi nộp.

## 2. Bảng khảo sát

| Khu vực | Chức năng và thao tác đã kiểm tra | Điểm hợp lý | Điểm có thể cải thiện | Đề xuất cải tiến và lý do |
| --- | --- | --- | --- | --- |
| **Trang chủ** | Mở website; đọc menu, ô tìm kiếm, các banner, khối Flash Sale, xu hướng và sách bán chạy. Phiên truy cập đầu xuất hiện popup quảng bá; đã đóng popup để tiếp tục xem trang. | Có nhiều lối vào ngành hàng và các khu vực khuyến mãi. | Popup đầu phiên che nội dung phía sau và cần thêm thao tác đóng để bắt đầu xem. Đây là quan sát trong phiên thử, không khẳng định mọi người đều gặp popup. | Có thể dùng banner trong trang hoặc điều chỉnh thời điểm hiện popup, giúp người mới bắt đầu khám phá trước. |
| **Danh mục sản phẩm** | Mở Văn học; thấy phân nhóm, bộ lọc giá và sắp xếp. Bấm mức 0–150.000đ; website hiển thị điều kiện “Giá: 0 - 150.000”. Kiểm tra tên dài trên thẻ. | Thông tin giá bán, giá bìa và tỷ lệ giảm đã có; bộ lọc có trạng thái điều kiện được chọn. | Tên dài của một số sách bị cắt sau khoảng hai dòng; thông tin phiên bản/quà tặng ở cuối có thể bị khuất. Với Bí Mật Tối Thượng, vùng tên cao khoảng 39 px nhưng nội dung cần khoảng 79 px ở lần đo desktop. | **Chọn thực hiện:** tách tên chính, tác giả, phiên bản và giá; bổ sung phần thông tin phiên bản mở rộng bằng chuột/bàn phím. Giữ tên chính đọc được khi đổi kích thước màn hình. |
| **Chi tiết sản phẩm** | Mở Người Đàn Ông Mang Tên OVE (Tái Bản); kiểm tra ảnh, tên, giá, tác giả, NXB, bìa mềm, bảng thông tin, mô tả và nút thêm giỏ. Thêm 1 cuốn thành công. | Tác giả, NXB và hình thức bìa đã được nêu ở phần đầu; có bảng thông tin và mô tả. | Phần mô tả có nhiều mục; việc tìm lại một phần phía dưới có thể cần cuộn nhiều. Đây là nhận định về cách tổ chức thông tin, không phải lỗi chức năng đã đo bằng thử nghiệm người dùng. | Có thể bổ sung liên kết đến các phần “Thông tin chi tiết”, “Mô tả”, “Đánh giá” để đi đến nội dung cần đọc nhanh hơn. Bản bài tập không triển khai lại trang chi tiết. |
| **Tìm kiếm** | Nhập “Ove”, nhận 25 kết quả tại thời điểm kiểm tra; kết quả có sách Ove và các sách chứa “Over”. Nhập “zzbooktest987654”, nhận 0 kết quả. | Có số kết quả, phân nhóm kết quả và điều kiện lọc. Website cho biết khi truy vấn có 0 kết quả. | Từ khóa ngắn có thể trả nhiều tên sách khác nhau; người tìm một tác phẩm cụ thể phải tiếp tục thu hẹp lựa chọn. Không kết luận thuật toán tìm kiếm sai. | Có thể gợi ý tên sách đầy đủ hoặc làm nổi phần khớp để người đọc nhận ra tác phẩm muốn tìm. Đây là đề xuất phân tích, chưa được lập trình trong bản HTML/CSS. |
| **Giỏ hàng** | Thêm sách Ove giá 115.000đ. Ban đầu sản phẩm chưa được chọn nên phần tổng là 0đ. Chọn sản phẩm rồi dùng nút cộng lên 2 cuốn, thành tiền và tổng hiển thị 230.000đ. Xóa sách; website hiện giỏ trống và nút mua sắm. | Có chọn sản phẩm, thay đổi số lượng, giá và tổng; phép tính đã thử cho kết quả đúng; có trạng thái giỏ trống. | Khi có sản phẩm nhưng chưa chọn, tiêu đề tổng tiền 0đ chưa giải thích ngay rằng tổng chỉ tính sản phẩm đã chọn. Đây là một tình huống có thể gây nhầm cho người mới. | Có thể hiển thị “Tạm tính cho 0 sản phẩm đã chọn” hoặc lời nhắc chọn sách. Không cần xây lại giỏ hàng cho phạm vi cải tiến được chọn. |

## 3. Minh chứng

| Ảnh | Nội dung |
| --- | --- |
| [Trang chủ](docs/evidence/01-trang-chu-desktop.jpg) | Trang chủ sau khi đóng popup đầu phiên. |
| [Danh mục desktop](docs/evidence/02-danh-muc-desktop.jpg) | Thẻ sách và vùng tên dài bị thu gọn. |
| [Bộ lọc giá](docs/evidence/03-danh-muc-loc-gia.jpg) | Mức giá đã chọn trong phiên thử. Chưa kiểm tra mọi bộ lọc hoặc toàn bộ danh sách kết quả. |
| [Chi tiết sách](docs/evidence/04-chi-tiet-sach.jpg) | Thông tin sách Ove và thao tác mua sắm. |
| [Giỏ hàng ban đầu](docs/evidence/05-gio-hang.jpg) | Có sản phẩm nhưng chưa chọn. |
| [Giỏ hàng 2 cuốn](docs/evidence/06-gio-hang-so-luong-2.jpg) | Tổng tiền 230.000đ. |
| [Sau khi xóa](docs/evidence/07-gio-hang-sau-xoa.jpg) | Giỏ hàng trống; đã dọn sản phẩm thử. |
| [Tìm kiếm Ove](docs/evidence/08-tim-kiem-co-ket-qua.jpg) | Truy vấn có kết quả. |
| [Tìm kiếm không kết quả](docs/evidence/09-tim-kiem-khong-ket-qua.jpg) | Truy vấn thử 0 kết quả. |
| [Khung nhìn 390 px](docs/evidence/11-the-sach-mobile.jpg) | Vùng danh sách tại kích thước mô phỏng điện thoại. Không đại diện cho mọi thiết bị/phiên bản trình duyệt. |

## 4. Giới hạn và kết luận khảo sát

Chỉ khảo sát một phiên khách chưa đăng nhập, một danh mục, một sách dùng cho thử giỏ và hai truy vấn tìm kiếm. Chưa kiểm tra thanh toán, tài khoản, mọi bộ lọc, tốc độ tải hay điện thoại vật lý. Giá, kết quả tìm kiếm và chương trình khuyến mãi có thể thay đổi.

Căn cứ được chọn cho bài thực hành là **khả năng đọc và phân biệt phiên bản khi tên sách dài**. Đây là phạm vi có thể minh họa bằng một trang HTML/CSS với bốn thẻ sách, không cần sửa hệ thống thật hoặc triển khai backend.
