# Nhật ký sử dụng AI

## 1. Công cụ và phạm vi

Công cụ: Codex trong ứng dụng ChatGPT, hỗ trợ khảo sát web, phân tích giao diện, viết HTML/CSS, tạo bìa SVG và kiểm tra bản mẫu.

**AI đã chuẩn bị phần lớn bản code và tài liệu hiện tại.** Đây không phải bằng chứng sinh viên đã tự viết toàn bộ hoặc đã tự chạy các bước kiểm tra. Phần sinh viên tự đối chiếu và chỉnh sửa được ghi riêng tại `docs/TU_KIEM_TRA_CA_NHAN.md` sau khi thực hiện.

## 2. Các yêu cầu chính đã sử dụng trong cuộc trao đổi

Các trích đoạn dưới đây là yêu cầu thực tế của người dùng; không phải prompt được bịa thêm sau khi làm:

> Mình muốn chọn website bán sách cho bài cá nhân chương 1, để phân biệt rõ với đồ án nhóm PetMatch về sản phẩm thú cưng.

> Bạn hãy giúp mình chọn một website bán sách phù hợp, rồi hướng dẫn từng bước: khảo sát đủ 5 khu vực theo đề bài, xác định một vấn đề thực tế và làm một trang HTML/CSS cải tiến. Chưa chốt phần cần cải tiến trước khi khảo sát.

> Mình muốn tự thao tác theo hướng dẫn để hiểu cách làm và giải thích được bài của mình.

> okee vậy hãy cải tiến như của bạn đã nói nha

> bạn hãy tự làm hết được ko

Trong quá trình trao đổi, người dùng đã được giải thích rằng năm khu vực là năm phần của một website, không phải năm vùng địa lý.

## 3. Kết quả AI đề xuất và thực hiện

1. Chọn FAHASA làm website tham khảo cho bài bán sách.
2. Đề xuất một số hướng cần kiểm chứng, chưa coi là lỗi trước khảo sát.
3. Khảo sát trực tiếp năm phần qua trình duyệt và lưu ảnh ngày 19/10/2026.
4. Xác nhận một số tên dài bị thu gọn ở danh mục; chọn phạm vi cải tiến thẻ sách.
5. Tạo trang Góc Đọc với bốn sản phẩm, tách thông tin phiên bản và dùng `details/summary` để mở nội dung.
6. Viết CSS riêng, bố cục 4/2/1 cột; bổ sung focus và giảm chuyển động.
7. Tạo bốn hình SVG mới; không lấy bìa sách phát hành làm tài nguyên giao diện.
8. Chuẩn bị bảng khảo sát, nguồn dữ liệu, tài liệu đọc code và hướng dẫn GitHub.

## 4. Kiểm tra và điều chỉnh của AI

- Thử thêm sách, chọn sản phẩm, tăng số lượng bằng nút cộng và xóa sách trên FAHASA. Đã kiểm chứng trường hợp 2 × 115.000đ = 230.000đ, không đặt mua.
- Thao tác điền trực tiếp ô số lượng trong công cụ tự động chưa cập nhật tổng ngay; chuyển sang nút cộng của website để kiểm chứng. Không dùng sự cố thao tác tự động đó để kết luận website tính tiền sai.
- Dữ liệu HTML đọc qua công cụ tìm kiếm có giá khác phiên trình duyệt; bản mẫu dùng giá ghi nhận trong phiên trình duyệt và ghi ngày khảo sát.
- Đo vùng tên sách để kiểm chứng bị cắt; không chỉ dựa vào phỏng đoán của AI.
- Khi xem bản mẫu lần đầu, AI điều chỉnh cỡ chữ phụ, font tiêu đề và chiều cao tối thiểu vùng tên để tăng khả năng đọc và căn các phần giá.
- Kết quả kiểm thử thực tế được cập nhật trong `docs/KIEM_THU.md`.

## 5. Những kết luận không sử dụng

- Không kết luận FAHASA thiếu giá giảm, tác giả hoặc thông tin bìa; các thông tin này đã tồn tại trong những phần được quan sát.
- Không khẳng định bản mẫu làm tăng tỷ lệ mua hàng hay giúp mọi khách hàng mua nhanh hơn; chưa có thử nghiệm người dùng để đo điều đó.
- Không khẳng định đã kiểm thử trên điện thoại vật lý.
- Không nhận kết quả do AI khảo sát là trải nghiệm do sinh viên đã tự thực hiện.

## 6. Phần sinh viên cần hiểu và có thể giải thích

- Vì sao tách tên chính và phiên bản thay vì chỉ phóng to tên đầy đủ.
- Vai trò của `article`, `h3`, `img`, `a`, `details`, `summary`, `del`.
- Cách `grid-template-columns` và media query thay đổi số cột.
- Cách dùng đường dẫn tương đối để mở trực tiếp và đưa lên GitHub Pages.
- Vì sao nút thao tác dẫn tới trang sách thật và trang mẫu không có chức năng đặt hàng.
- Phân biệt kiểm thử do AI thực hiện với phần tự kiểm tra và tự sửa của sinh viên.

Xem `docs/GIAI_THICH_CODE.md` để đọc phần giải thích cụ thể.
