# JavaScript Labs

Sinh viên: **Nguyễn Quang Đức** · MSSV **31241026319** · Lớp **26C1INF50902702 · ST5**.

## Mục tiêu

Hoàn thành 29 Exercise theo ba tài liệu Lab do giảng viên cung cấp; thực hành nền tảng JavaScript, DOM và sự kiện, jQuery và GET bất đồng bộ.

## Truy cập

- [Trang chủ GitHub Pages](https://quangduc-qidu.github.io/ptudtmdt-chuong1-fahasa-ui/JavaScript-Labs/)
- [Lab 08](Lab08/) · [Lab 09](Lab09/) · [Lab 10](Lab10/)
- [Bản giải thích riêng từng bài](huong-dan.html)
- [Ghi nhận hỗ trợ AI](AI_USAGE.md)

## Chạy trên máy

Mở thư mục repository bằng VS Code và dùng Live Server, hoặc chạy `python -m http.server 5500` từ thư mục repository. Mở `http://localhost:5500/JavaScript-Labs/`. GET và xem mã bằng fetch phải chạy qua HTTP, không dùng file://.

## Cấu trúc

```text
JavaScript-Labs/
  index.html                # Portfolio và điều hướng
  huong-dan.html            # Giải thích, file đối chiếu, cách tự thử
  css/style.css
  js/main.js
  images/avatar.png
  vendor/jquery-3.1.1.min.js
  Lab08/                    # exercise01.html đến exercise11.html
  Lab09/                    # exercise01.html đến exercise08.html
  Lab10/                    # exercise01.html đến exercise10.html, data/
  AI_USAGE.md
```

Mỗi Exercise có file HTML riêng và file JavaScript tương ứng trong js/; Exercise 8.2 dùng script nhúng đúng mục tiêu của đề. Tài nguyên ảnh/quốc kỳ và jQuery kế thừa bộ khởi đầu của giáo trình *Fundamentals of Web Development, 2nd Ed*, Randy Connolly và Ricardo Hoar, do giảng viên cung cấp.

## Điều chỉnh để chạy trên GitHub Pages

- Exercise 8.1 có trang kiểm tra script/noscript cục bộ vì URL kiểm tra cũ không truy cập được khi chuẩn bị bài.
- Các bài Lab 08 giữ document.write trong quá trình đọc HTML theo đề; không gọi phương thức này sau load.
- Lab 09 dùng ID và label không trùng; form minh họa không gửi mật khẩu lên URL. Validation chỉ thuộc phạm vi trường rỗng của bài.
- Lab 10 nạp jQuery 3.1.1 qua HTTPS, dự phòng bằng file gốc cục bộ. Không phụ thuộc Bootstrap/Font Awesome bên ngoài để hiển thị giao diện.
- Exercise 10.9–10.10 vẫn gửi HTTP GET bằng jQuery. Dữ liệu JSON cùng website là dữ liệu mẫu bổ sung, không giả nhận là kết quả dịch vụ ngoài. Có tùy chọn thử URL HTTPS gốc, lỗi 404 và JSON sai; không bỏ qua lỗi chứng chỉ hoặc tự đổi nguồn âm thầm.
- Bản gốc gọi file walkthrough02 cho Exercise 10.2 nhưng thiếu HTML riêng; mỗi Exercise được tách thành một trang để đối chiếu. Các khác biệt tên walkthrough/exercise trong tài liệu được thống nhất bằng exerciseNN.

## Nguồn

- [Hướng dẫn Lab 08 và starter](https://drive.google.com/file/d/1XB1qiBgI_10gKjS-u5W80bXW_RmkBUJS/view)
- [Hướng dẫn Lab 09 và starter](https://drive.google.com/file/d/1XCcMEyka2eSWfMETrutBkacMRrFTJoIH/view)
- [Hướng dẫn Lab 10 và starter](https://drive.google.com/file/d/1X9DkdzSjvI6Xby5ddlg3Am_btxldu76v/view)
- [jQuery GET](https://api.jquery.com/jQuery.get/) · [jQuery AJAX](https://api.jquery.com/jQuery.ajax/)

Các số dân/thuế/giá trong bài giữ ý nghĩa ví dụ của giáo trình, không dùng như thông tin kinh doanh hoặc thống kê mới.
