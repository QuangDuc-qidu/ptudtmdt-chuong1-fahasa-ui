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

**Kết quả kiểm tra có AI hỗ trợ:** kiểm tra hiển thị, liên kết, nội dung phiên bản và bố cục ở các kích thước màn hình; đối chiếu những nhận xét chính với website nguồn. Một số điều chỉnh về cỡ chữ và chiều cao vùng tên sách được thực hiện trong quá trình AI chạy thử.

**Phần tôi đã thực hiện trong quá trình trao đổi:** lựa chọn lĩnh vực bán sách và phương án cải tiến; mở bản HTML để thử các mục điều hướng; góp ý rằng tên hai mục và phần hướng dẫn khó hiểu; yêu cầu sửa cách diễn đạt. Khi xem tài liệu khảo sát, tôi cũng phản hồi rằng một số ảnh chưa hiển thị đầy đủ nội dung, cần kiểm tra chất lượng ảnh trước khi sử dụng.

**Điểm tôi tự phát hiện ngày 21/10/2026:** Khi xem khối gợi ý ở đầu trang, tôi nhận thấy ký hiệu “01 / 04” khiến tôi tưởng còn các trang hoặc slide tiếp theo và đã hỏi các số còn lại nằm ở đâu. Sau khi tôi nêu thắc mắc, AI kiểm tra mã và xác nhận khối này không có các mục “02/04”, “03/04”, “04/04” hoặc chức năng chuyển slide. Đây là điểm gây nhầm lẫn do tôi phát hiện khi xem giao diện.

**Hướng sửa được AI hướng dẫn:** Đổi nội dung của phần tử `span.note-number` từ “01 / 04” thành “GỢI Ý” và bỏ thuộc tính `aria-hidden="true"` của nhãn. Việc đổi nhãn giúp thể hiện đúng vai trò của khối; bỏ thuộc tính này để trình đọc màn hình có thể đọc nhãn.

**Phần AI hỗ trợ sửa mã ngày 21/10/2026:** Sau khi tôi yêu cầu sửa giúp, AI đổi nhãn “01 / 04” thành “GỢI Ý” trong `index.html` và bỏ thuộc tính `aria-hidden="true"` của nhãn. AI kiểm tra lại đoạn HTML và các đường dẫn tài nguyên trong bộ file; không có tài nguyên nội bộ bị thiếu. Đây là phần tôi phát hiện vấn đề và AI thực hiện sửa mã, không ghi thành thao tác tôi tự sửa. Chưa xác nhận tôi đã tự mở bản mới trên trình duyệt hoặc tự chỉnh mã.

Phần tự đối chiếu đầy đủ năm khu vực, tự kiểm tra trên các kích thước màn hình và tự sửa mã chưa được xác nhận hoàn tất. Tôi sẽ bổ sung kết quả thực tế vào mục này sau khi thực hiện. Kết quả AI chạy thử được ghi riêng với phần tự kiểm tra này.

Kết quả chạy thử của Codex ghi nhận bố cục bốn cột ở 1366 px, hai cột ở 768 px và một cột ở 390 px; các khung nhìn này không tràn ngang trong lần kiểm tra. Đây là mô phỏng kích thước bằng trình duyệt, chưa phải kiểm tra trên điện thoại thật. Bài thực hành đánh giá cách hiển thị và thao tác, chưa đo mức tăng doanh số hoặc hiệu quả với người dùng thực tế.

## 6. Nội dung cần nắm để giải thích bài

- Vai trò của `article`, `h3`, `img`, `a`, `details`, `summary` và `del`.
- Cách CSS Grid và media query thay đổi số cột theo độ rộng màn hình.
- Cách liên kết `href="#..."` dẫn đến phần có `id` tương ứng trên cùng trang.
- Lý do tách thông tin phiên bản khỏi tên sách và trình bày riêng giá bán, giá bìa, mức giảm.
- Cách mở `index.html`, sử dụng đường dẫn tương đối và phân biệt repository với GitHub Pages.

Tôi cần đối chiếu các nội dung trên với mã HTML/CSS và bổ sung phần giải thích bằng lời của mình sau khi tự kiểm tra.
