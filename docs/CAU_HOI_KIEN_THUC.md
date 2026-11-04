# Bảy câu hỏi kiến thức - Buổi 2

Các câu trả lời dưới đây đối chiếu trực tiếp với `index.html` và `css/style.css` của bài Góc Đọc. Phần giải thích và kiểm thử được Codex hỗ trợ; khả năng giải thích của sinh viên được kiểm tra khi thực hành trực tiếp.

## 1. Trong khu vực giao diện của em, em đã sử dụng những phần tử HTML5 nào? Vì sao em chọn chúng?

Khu vực sách dùng `section` để nhóm nội dung cùng chủ đề, `h2` cho tiêu đề khu vực, `article` cho từng sách và `h3` cho tên tác phẩm. `img` kèm `alt` mô tả bìa; `details/summary` cho phép mở thông tin phiên bản. `a` dẫn đến trang sách ở FAHASA. Cấu trúc này thể hiện ý nghĩa nội dung, không chỉ tạo hình thức hiển thị. Ngày tham khảo giá dùng `time` có `datetime`.

## 2. Giải thích sự khác nhau giữa margin và padding. Cho ví dụ từ thẻ sản phẩm của em.

Padding là khoảng cách bên trong phần tử, giữa nội dung và viền. Margin là khoảng cách bên ngoài, ngăn phần tử với các phần xung quanh. `.book-content` có padding 20 px để chữ không sát mép thẻ. `.edition-tag` có padding `4px 8px` tạo nền quanh chữ và margin-top 14 px tạo khoảng cách với phần phía trên. Tăng padding cũng có thể làm khối cao hơn hoặc giảm chỗ dành cho chữ nếu chiều rộng bên ngoài cố định.

## 3. Trong bài của em, Flexbox được sử dụng ở đâu? Giải thích tác dụng của justify-content và align-items.

Flexbox có trong menu, hàng giá, nút liên kết và bố cục bên trong thẻ. `.book-action` sắp chữ và mũi tên theo hàng: `justify-content: space-between` đẩy chúng về hai phía theo trục chính; `align-items: center` căn giữa theo trục vuông góc. `gap: 8px` giữ khoảng cách. Với `flex-direction: column` ở `.book-content`, trục chính là dọc, nên không thể luôn hiểu justify-content là căn ngang trong mọi trường hợp.

## 4. CSS Grid khác Flexbox như thế nào? Vì sao em sử dụng Grid cho danh sách sản phẩm?

Grid thuận tiện cho bố cục hàng và cột của toàn danh sách; Flexbox chủ yếu bố trí theo một trục và phân phối khoảng trống trong hàng hoặc cột. Grid phù hợp để bốn thẻ chia cột đều, chuyển sang hai hoặc một cột theo màn hình. Flexbox phù hợp sắp giá với nhãn giảm hoặc chữ với mũi tên trong một thẻ. Hai công cụ được kết hợp thay vì thay thế hoàn toàn nhau.

## 5. Nếu xóa quy tắc CSS display: grid khỏi danh sách sản phẩm, giao diện có thể thay đổi như thế nào?

Trong mã hiện tại, `.book-grid` là `div`. Nếu xóa display:grid và không có quy tắc khác thay thế, nó trở lại kiểu block; grid-template-columns không còn tạo cột. Các `article` xếp theo luồng block thành từng khối nối tiếp, thường rộng hết vùng chứa. Gap của Grid không còn tạo khoảng cách hàng/cột như trước. Bên trong mỗi thẻ vẫn có Flexbox vì quy tắc đó nằm ở `.book-card` và `.book-content`. Đây là dự đoán theo mã; cần tự thử trên bản sao nếu muốn ghi là kết quả quan sát.

## 6. Vì sao cần sử dụng thuộc tính alt cho hình ảnh sản phẩm?

Alt cung cấp mô tả thay thế cho công nghệ hỗ trợ và khi ảnh không tải được. Ví dụ ảnh đầu ghi “Bìa minh họa tự thiết kế cho Bí Mật Tối Thượng”, giúp hiểu ảnh đại diện cho sách nào và tránh hiểu nhầm là bìa phát hành. Alt cần đúng nội dung, không nhồi từ khóa. Ảnh trang trí thuần túy có thể có alt rỗng; bìa sản phẩm trong bài có nội dung cần mô tả.

## 7. Hãy nêu một đề xuất của AI mà em đã kiểm tra hoặc điều chỉnh trước khi đưa vào bài tập.

Một đề xuất của AI là tăng cỡ chữ nhãn “Bìa cứng/Bìa mềm” đang ở mức 10 px. Bản hoàn thiện chọn 12 px trong quy tắc `.binding-label`, giữ nguyên vị trí và padding để chỉ thay đổi một yếu tố. Kết quả kiểm thử ở 1366, 768 và 390 px cho thấy cả bốn nhãn nhận cỡ chữ mới, không vượt khỏi khung thẻ. Phương án được giữ vì chữ lớn hơn mà bố cục chính không thay đổi.

Đề xuất căn nút cũng được kiểm chứng: khi mở thông tin sách đầu, bản Buổi 1 làm nút đầu thấp hơn các nút còn lại 78 px; bản Buổi 2 dùng Grid `stretch`, Flexbox theo cột và `margin-top: auto` cho cụm giá nên bốn nút cùng hàng có cùng tọa độ dọc. Ảnh trước/sau và cách kiểm tra nằm trong [báo cáo kiểm thử](KIEM_THU.md).

Các lượt sửa và kiểm thử nêu trên do Codex hỗ trợ thực hiện, chưa phải ghi nhận sinh viên đã tự kiểm tra độc lập.
