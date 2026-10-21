# Nhật ký sử dụng AI

## 1. Công cụ AI

Codex — công cụ AI của OpenAI hỗ trợ lập trình và phân tích giao diện.

## 2. Mục đích sử dụng

Sử dụng AI để hỗ trợ phân tích giao diện FAHASA, đề xuất phương án cải tiến thẻ sách, tạo mã HTML/CSS và giải thích cách hoạt động. AI cũng hỗ trợ tạo hình minh họa SVG, chạy thử, soạn bản nháp tài liệu và thao tác đưa bài lên GitHub Pages.

## 3. Các yêu cầu chính

Các yêu cầu dưới đây được trích từ cuộc trao đổi:

> Bạn hãy giúp mình chọn một website bán sách phù hợp, rồi hướng dẫn từng bước: khảo sát đủ 5 khu vực theo đề bài, xác định một vấn đề thực tế và làm một trang HTML/CSS cải tiến.

> Mình muốn tự thao tác theo hướng dẫn để hiểu cách làm và giải thích được bài của mình.

Phương án tôi lựa chọn sau khi trao đổi với AI là cải tiến thẻ sách: tách tên tác phẩm, tác giả và thông tin bản in; cho phép mở thông tin phiên bản; trình bày rõ giá bán, giá bìa và mức giảm; điều chỉnh bố cục cho màn hình nhỏ. Tôi nhờ Codex hỗ trợ triển khai phương án bằng HTML/CSS và giải thích mã nguồn.

Trong lần xem lại, tôi nhận thấy tên hai mục “Chọn phiên bản” và “Về bản mẫu” khó hiểu, nên yêu cầu điều chỉnh tên và nội dung hướng dẫn. Bản chỉnh sửa sử dụng hai tên “Hướng dẫn chọn sách” và “Giới thiệu trang”.

## 4. Kết quả AI hỗ trợ

- Hỗ trợ khảo sát năm khu vực trên FAHASA, chụp ảnh qua công cụ trình duyệt và soạn bảng nhận xét để tôi tiếp tục đối chiếu, bổ sung đánh giá.
- Đề xuất tách tên sách, tác giả và thông tin phiên bản để nội dung trên thẻ dễ đọc hơn; ghi nhận giá tại thời điểm khảo sát.
- Tạo mã trang Góc Đọc gồm bốn sách mẫu, CSS tách riêng và bố cục thích ứng với màn hình máy tính, máy tính bảng và điện thoại.
- Sử dụng HTML `details/summary` để mở thông tin phiên bản; tạo bốn bìa SVG minh họa.
- Hỗ trợ chạy thử, điều chỉnh cách trình bày, soạn tài liệu giải thích mã nguồn và hướng dẫn sử dụng; tạo repository và xuất bản GitHub Pages.

## 5. Kiểm tra và điều chỉnh

Tôi đã tự mở trang và kiểm tra giao diện, thông tin phiên bản cùng các thao tác trên trang.

Trước đó, tôi phát hiện ký hiệu “01/04” khiến người xem tưởng có các trang hoặc slide tiếp theo. AI hỗ trợ đổi nhãn thành “GỢI Ý”.

Ngày 21/10/2026, theo hướng dẫn của AI, tôi tự sửa nội dung trong phần tử span có class="note-number" từ “GỢI Ý” thành “GỢI Ý CHỌN SÁCH”. Tôi giữ nguyên class để tiếp tục sử dụng định dạng CSS hiện có.

Tôi lưu file và mở lại trang trên Chrome. Nhãn mới hiển thị đúng và không đè lên hình quyển sách ở kích thước tôi kiểm tra. Sau đó, tôi cập nhật thay đổi HTML lên GitHub.

## 6. Nội dung cần nắm để giải thích bài

- Vai trò của `article`, `h3`, `img`, `a`, `details`, `summary` và `del`.
- Cách CSS Grid và media query thay đổi số cột theo độ rộng màn hình.
- Cách liên kết `href="#..."` dẫn đến phần có `id` tương ứng trên cùng trang.
- Lý do tách thông tin phiên bản khỏi tên sách và trình bày riêng giá bán, giá bìa, mức giảm.
- Cách mở `index.html`, sử dụng đường dẫn tương đối và phân biệt repository với GitHub Pages.

Tôi cần đối chiếu các nội dung trên với mã HTML/CSS và bổ sung phần giải thích bằng lời của mình sau khi tự kiểm tra.
