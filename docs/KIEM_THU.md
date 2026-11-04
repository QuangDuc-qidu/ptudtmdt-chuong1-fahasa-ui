# Báo cáo kiểm thử Buổi 2 - Góc Đọc

Ngày kiểm tra bổ sung: **04/11/2026**. Môi trường: Chromium trong trình duyệt tích hợp, bản chạy cục bộ bằng HTTP; kiểm tra lại sau chỉnh sửa. Người/công cụ thực hiện: Codex. Bản trước là mã Buổi 1 tại commit `93eca5932745bd0d9f39f371f945e235394ee621`; HTML/CSS gốc đã được đối chiếu với repository trước cập nhật. Bản lưu trong `before/` chỉ đổi đường dẫn tài liệu từ `README.md` thành `../README.md` để phù hợp vị trí thư mục, không thay đổi giao diện so sánh.

## 1. Bảng kiểm tra

| Nội dung | Cách kiểm tra | Kết quả |
|---|---|---|
| HTML mở được | Mở `index.html` trong trình duyệt | Đạt, hiển thị đủ bốn sách |
| CSS được áp dụng | Đọc kiểu hiển thị của Grid, nút và nhãn | Đạt, CSS ngoài được tải đúng |
| Ảnh | Kiểm tra `complete` và `naturalWidth` của bốn ảnh | Đạt, bốn SVG tải được |
| 1366 px | Đọc số cột và độ rộng tài liệu | Đạt, bốn cột; scrollWidth = clientWidth = 1351 px |
| 768 px | Đổi viewport, tải lại và đo | Đạt, hai cột; scrollWidth = clientWidth = 753 px |
| 390 px | Đổi viewport, tải lại và đo | Đạt, một cột; scrollWidth = clientWidth = 375 px |
| Nhãn bìa | Đọc cỡ chữ và kiểm tra nhãn có vượt thẻ | Đạt, bốn nhãn 12 px, nằm trong thẻ ở ba độ rộng |
| Nút sản phẩm | Đo chiều cao ở 768 và 390 px | Đạt, cả bốn nút cao 48 px |
| Liên kết nội bộ | Đối chiếu bảy liên kết neo với id; bấm Hướng dẫn chọn sách | Đạt, đủ đích; URL chuyển đến `#chon-phien-ban` |
| Liên kết sách | Đối chiếu href/target/rel; mở bốn URL bằng công cụ duyệt web | Đạt, bốn trang trả về tên sách tương ứng; giữ `noopener noreferrer` |
| Mở/đóng thông tin | Bấm summary đầu rồi nhấn Enter | Đạt, mở bằng chuột, đóng bằng Enter |
| Focus | Nhấn Tab từ summary tới liên kết sách | Đạt, focus tới `.book-action`, có viền và nền xanh đậm |
| Hover | Di chuột vào vùng summary khi bấm mở | Đạt, summary có gạch chân; ảnh trong thẻ có transform theo CSS hover |
| Transition | Đọc kiểu áp dụng trên nút | Đạt, 0,2 giây cho màu nền, chữ và viền |
| Căn nút khi mở chi tiết | So sánh bản trước và sau ở 1366 px | Đạt, bản trước lệch 78 px; bản sau bốn nút cùng tọa độ dọc |
| Flexbox thử nghiệm | Bản sao đổi `space-between` thành `center` | Đạt, chữ/mũi tên về giữa, gap vẫn 8 px; bản chính giữ `space-between` |
| Grid thử nghiệm | Bản sao đổi bốn cột thành ba cột | Đạt, sách thứ tư xuống hàng hai; bản chính giữ 4/2/1 cột |

Độ rộng nội dung nhỏ hơn viewport vì thanh cuộn dọc. Số đo chỉ áp dụng cho lần thử trong môi trường nêu trên, không phải chứng nhận mọi thiết bị. Giá sách vẫn là dữ liệu tham khảo ngày 19/10/2026; việc kiểm tra liên kết không cập nhật giá.

## 2. Vấn đề, nguyên nhân và cách sửa

| Vấn đề | Nguyên nhân | Cách sửa | Kiểm tra lại |
|---|---|---|---|
| Nút không cùng hàng khi mở thông tin một sách | Grid cũ dùng `align-items: start`; thẻ chưa giãn theo hàng | Dùng `stretch`; `.book-card` và `.book-content` là Flexbox theo cột; `.price-block` có `margin-top: auto` | Mở sách đầu: bốn nút cùng hàng |
| Chữ phụ quá nhỏ | Nhãn phiên bản, mức giảm và giá bìa 11 px | Tăng các phần tương ứng lên 12 px; padding nội dung thành 20 px | Kiểm tra ở ba độ rộng |
| Phản hồi tương tác còn ít | Nút chưa có transition màu, summary thiếu hover rõ | Thêm transition màu 0,2 giây và gạch chân summary khi hover; giữ focus | Thử chuột, Enter và Tab |
| Nhãn hình thức bìa khó đọc | `.binding-label` có `font-size: 10px` | Tăng thành 12 px, giữ nguyên các thuộc tính còn lại | Cả bốn nhãn trong khung ở ba độ rộng |

## 3. Ảnh minh chứng

- Trước cải tiến, mở sách đầu: [baseline-open-details.png](../screenshots/baseline-open-details.png).
- Sau cải tiến, mở sách đầu: [final-open-details.png](../screenshots/final-open-details.png).
- Trước tăng cỡ nhãn: [label-before.png](../screenshots/label-before.png).
- Bản hoàn thiện 1366 px: [final-desktop.png](../screenshots/final-desktop.png).
- Bản 768 px: [final-768.png](../screenshots/final-768.png).
- Bản 390 px: [final-390.png](../screenshots/final-390.png).
- Focus bàn phím: [final-keyboard-focus.png](../screenshots/final-keyboard-focus.png).
- Hover: [final-hover.png](../screenshots/final-hover.png).
- Thử Flexbox center: [experiment-flex-center.png](../screenshots/experiment-flex-center.png).
- Thử Grid ba cột: [experiment-grid-three.png](../screenshots/experiment-grid-three.png).

Ảnh chụp từ trình duyệt đang chạy mã thật, không phải ảnh mô phỏng. Các biến thể thử nghiệm được chạy trên bản sao, không đưa vào trang chính.

## 4. Phạm vi xác nhận

Đã hoàn tất sửa mã và kiểm thử có AI hỗ trợ. Ngày 04/11/2026, Nguyễn Quang Đức xác nhận đã tự sửa nhãn bìa từ 10 lên 12 px và mở trang kiểm tra. Bảng kết quả, số đo và ảnh nhiều kích thước ở trên do Codex thực hiện; xác nhận của sinh viên được ghi riêng trong [nhật ký AI](../AI_USAGE.md). Không kiểm thử giỏ hàng hoặc thanh toán vì bài chỉ có HTML/CSS.
