# Vấn đề và phương án cải tiến thẻ sách

## 1. Căn cứ lựa chọn

Khảo sát năm khu vực đã hoàn thành trước khi chốt phần code. Ở danh mục Văn học, tên **Bí Mật Tối Thượng - The Secret Of Secrets - Bìa Cứng - Kèm Chữ Ký In Của Dan Brown (Chỉ Có Tại Bản In Đầu)** được đặt chung trong một vùng tên cao khoảng hai dòng.

Trong lần đo desktop, chiều cao hiển thị của liên kết tên khoảng 39 px, trong khi chiều cao cần để chứa nội dung khoảng 79 px; kiểu `overflow: hidden` thu gọn phần còn lại. Ở khung nhìn 390 px, nội dung cần nhiều dòng hơn. Điều này chứng minh có thông tin bị khuất trong những lần đo, không chứng minh mọi người dùng đều gặp khó khăn.

Nguồn: [danh mục Văn học](https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc.html). Ảnh: [desktop trước cải tiến](evidence/02-danh-muc-desktop.jpg), [khung nhìn nhỏ](evidence/11-the-sach-mobile.jpg).

## 2. Vấn đề cụ thể

Người muốn phân biệt phiên bản bìa cứng, bản tái bản hoặc sách kèm chữ ký in có thể chưa đọc được thông tin ở cuối tên ngay từ danh sách. Chỉ tăng chiều cao toàn bộ tên dài sẽ làm thẻ nhiều chữ hơn và khó quét nhanh.

## 3. Phương án đã chọn

| Thành phần | Cách trình bày trong bản mẫu | Lý do |
| --- | --- | --- |
| Tên tác phẩm | Một trường riêng, có thể xuống dòng, không cắt bằng dấu ba chấm. | Giúp nhận ra tác phẩm chính. |
| Tác giả | Một dòng riêng, ngay trước tên sách. | Bổ sung căn cứ nhận diện khi tên gần giống nhau. |
| Phiên bản | Nhãn ngắn nêu bìa, tái bản hoặc chữ ký in khi có dữ liệu. | Thông tin quan trọng không bị gộp vào cuối tiêu đề dài. |
| Tên đầy đủ/thông tin bổ sung | Mở bằng `details/summary`. | Đọc thêm được bằng chuột, chạm hoặc bàn phím; không cần JavaScript. |
| Giá | Giá tham khảo nổi bật, giá bìa gạch ngang, tỷ lệ giảm và tiền chênh lệch. | Dễ đối chiếu các số; không coi tính năng giá là điều FAHASA chưa có. |
| Hình ảnh | Bốn SVG tự thiết kế với cùng tỷ lệ. | Minh họa bố cục, không sao chép bìa phát hành. |
| Thao tác | Liên kết có nhãn rõ dẫn tới đúng sách trên FAHASA. | Có thao tác thực sự, không tạo nút thêm giỏ giả. |
| Màn hình nhỏ | Một cột ở điện thoại, hai ở tablet, bốn ở desktop. | Ưu tiên chiều rộng đọc tên và thông tin; đánh đổi là phải cuộn nhiều hơn. |

## 4. Giới hạn thiết kế

Đây là một trang độc lập về thẻ sách, không phải sửa source hoặc triển khai lên hệ thống FAHASA. Bản mẫu không có tìm kiếm, bộ lọc hoặc giỏ hàng riêng. Những đề xuất khác trong bảng khảo sát chưa được code.

Chưa thực hiện khảo sát người dùng để so sánh tốc độ chọn sách trước/sau; mục tiêu kiểm chứng của bản mẫu là tên chính không bị cắt, thông tin phiên bản mở được, tài nguyên tải đúng và trang không tràn ngang ở các khung nhìn đã thử.
