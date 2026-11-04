# Nhật ký sử dụng AI

Sinh viên: **Nguyễn Quang Đức**. Website thực hành: **Góc Đọc**, tiếp tục trong cùng repository từ Buổi 1 sang Buổi 2. Các mục 1–6 ghi lại quá trình Buổi 1; mục 7 bổ sung quá trình Buổi 2 và xác nhận của sinh viên ngày 04/11/2026.

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


## 7. Buổi 2 — Thực hành HTML5 và CSS3

### 7.1. Công cụ, thời điểm và mục đích

- Công cụ: **OpenAI Codex**, hỗ trợ lập trình, giải thích và kiểm tra giao diện.
- Ngày 28/10/2026: chuẩn bị bản cải tiến từ website Buổi 1.
- Ngày 04/11/2026: hoàn thiện mã, thực nghiệm bố cục, báo cáo và ảnh; cập nhật hồ sơ trên GitHub; đối chiếu và bổ sung nhật ký này.
- Phạm vi: khu vực bốn thẻ sách tại `section#tu-sach`. Kế thừa dữ liệu và bìa SVG của Buổi 1 tại commit `93eca59`; không xây dựng lại toàn bộ website FAHASA.

### 7.2. Các yêu cầu chính đã trao đổi

Các câu dưới đây được trích từ yêu cầu thực tế của người học, không phải danh sách prompt mẫu được giả định là đã chạy:

> tôi đã làm xong phần bước 1 rồi, trong thời gian này hãy hỗ trợ tôi làm bài tập cá nhân buổi 2

> nếu tôi nhờ bạn làm hết, xong tôi đọc lại hết những gì bạn làm rồi tôi sẽ hỏi bạn chỗ nào tôi ko biết, ko hiểu được ko

Trong yêu cầu đầu, “bước 1” là phần bài nhóm đã thực hiện; bài cá nhân tiếp tục website Góc Đọc. Sau khi trao đổi, người học đồng ý để Codex chuẩn bị mã và tài liệu, đồng thời cần tự đọc, thực hành và giải thích phần bài của mình.

Yêu cầu cập nhật nhật ký ngày 04/11/2026:

> bài tập cá nhân của tôi đã làm xong và đăng lên github rồi á, bạn hãy kiểm tra và cập nhật lại nhật ký AI nha, có gì ko hiểu thì hỏi tôi

### 7.3. Những phần được AI hỗ trợ

| Công việc | Kết quả hỗ trợ |
|---|---|
| Đọc đề và kiểm tra bản cũ | Chọn khu vực thẻ sách; lưu HTML, CSS và ảnh Buổi 1 trong `before/` để đối chiếu |
| Phân tích điểm cần cải thiện | Ghi nhận nút lệch hàng khi mở thông tin, chữ phụ nhỏ và phản hồi tương tác cần rõ hơn |
| HTML5 | Kiểm tra cấu trúc ngữ nghĩa; thêm `time` cho ngày tham khảo giá và `aria-describedby` cho phần lưu ý |
| CSS và Box Model | Tăng padding vùng nội dung thành 20 px; tăng một số chữ phụ từ 11 lên 12 px |
| Căn thẻ và giá | Dùng Grid `stretch`, Flexbox theo cột và `margin-top: auto` để giá/nút cùng hàng |
| Tương tác | Bổ sung transition màu 0,2 giây, hover ở summary, giữ focus bàn phím và quy tắc giảm chuyển động |
| Thực nghiệm và kiểm thử | Hỗ trợ thử Flexbox `center`, Grid ba cột trên bản sao; kiểm tra bản chính ở ba độ rộng và lưu ảnh thực tế |
| Tài liệu | Hỗ trợ README, báo cáo thực hành, báo cáo kiểm thử và phần giải thích bảy câu hỏi kiến thức |

HTML ngữ nghĩa, Grid, Flexbox, `details/summary`, bìa SVG và các nội dung đã có từ Buổi 1 được kế thừa; không ghi nhận toàn bộ chúng là kết quả mới tạo ở Buổi 2. Các lượt AI hỗ trợ sửa nhãn bìa và kiểm thử bổ sung cũng được ghi rõ trong [báo cáo thực hành](docs/BAO_CAO_BUOI2.md).

### 7.4. Đối chiếu đề xuất và kết quả sử dụng

| Đề xuất/điểm cần xử lý | Cách kiểm tra và quyết định trong bản hoàn thiện |
|---|---|
| Căn nút khi mở thông tin sách | Theo báo cáo kiểm thử đã lưu: bản cũ lệch khoảng 78 px khi mở sách đầu; bản mới có bốn nút cùng tọa độ dọc. Giữ Grid stretch và Flexbox theo cột; không cắt tên sách hoặc đặt chiều cao cố định cho văn bản |
| Đổi `space-between` thành `center` | Thực nghiệm của Codex trên bản sao cho thấy chữ và mũi tên tụ về giữa; bản chính giữ `space-between` để chúng nằm hai phía |
| Dùng Grid ba cột | Thực nghiệm trên bản sao làm cuốn thứ tư xuống hàng hai; bản chính giữ bố cục 4/2/1 cột theo độ rộng |
| Tăng nhãn “Bìa cứng/Bìa mềm” | Chọn 12 px thay 10 px, giữ vị trí và padding; báo cáo kiểm thử ghi nhận nhãn nằm trong thẻ tại ba độ rộng |

Đây là kết quả hỗ trợ và kiểm thử được ghi trong hồ sơ; phần xác nhận sinh viên tự thao tác được ghi riêng ở mục 7.5.

### 7.5. Phần sinh viên tự thực hiện và xác nhận

Ngày **04/11/2026**, khi được hỏi về phần thực hành độc lập của Buổi 2, Nguyễn Quang Đức xác nhận:

> Tôi tự sửa nhãn bìa và mở trang kiểm tra

Phần được xác nhận là tự sửa cỡ chữ nhãn “Bìa cứng/Bìa mềm” trong `.binding-label` từ 10 px thành 12 px và mở trang để kiểm tra sau khi sửa. Codex hỗ trợ gợi ý và giải thích quy tắc CSS; sinh viên thực hiện thao tác chỉnh sửa và xem lại trang theo xác nhận trên. Bản trên GitHub và GitHub Pages đã được đối chiếu, đều có `font-size: 12px` ở quy tắc này.

Các ảnh kiểm thử nhiều kích thước và các số đo trong báo cáo là kết quả kiểm tra bằng công cụ của Codex. Không dùng chúng để thay cho xác nhận rằng sinh viên tự kiểm thử toàn bộ ba kích thước. Phần giải thích kiến thức được AI hỗ trợ; sinh viên đọc, hỏi lại phần chưa hiểu và chịu trách nhiệm giải thích bài của mình.

### 7.6. Hồ sơ kiểm chứng và tình trạng cập nhật

- [Báo cáo thực hành theo tám bước](docs/BAO_CAO_BUOI2.md).
- [Báo cáo kiểm thử, vấn đề và cách sửa](docs/KIEM_THU.md).
- [Bảy câu hỏi kiến thức](docs/CAU_HOI_KIEN_THUC.md).
- [Ảnh trước cải tiến](screenshots/baseline-open-details.png), [sau cải tiến](screenshots/final-open-details.png), [trước tăng nhãn](screenshots/label-before.png), [bản hoàn thiện](screenshots/final-desktop.png).
- Các commit Buổi 2 đã có khi đối chiếu: `8cce69f` (báo cáo), `a4e3d6b` (ảnh), `47fd7ef`, `790b30c`, `e57db1c` (bản đối chiếu), `7a1e502` (CSS và nhãn bìa), `3b6515e` (HTML và README).

Ngày 04/11/2026, Codex đối chiếu mã và tài liệu trên GitHub; website GitHub Pages và CSS trả về thành công, nhãn bìa có cỡ chữ 12 px. Nhật ký được bổ sung theo mã đã lưu, báo cáo kiểm thử và xác nhận trực tiếp của sinh viên. Nội dung Buổi 1 được giữ để theo dõi quá trình học qua cả hai buổi.
