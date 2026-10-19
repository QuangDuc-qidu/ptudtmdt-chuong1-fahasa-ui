# Hướng dẫn mở bài, tự kiểm tra và nộp

## 1. Các đường dẫn đã chuẩn bị

- Mã nguồn riêng, Public: [GitHub bài cá nhân](https://github.com/QuangDuc-qidu/ptudtmdt-chuong1-fahasa-ui).
- Trang chạy trực tiếp: [Góc Đọc](https://quangduc-qidu.github.io/ptudtmdt-chuong1-fahasa-ui/).
- Bản tại máy gồm `index.html`, thư mục `css/`, `images/` và các tài liệu. Có thể mở thẳng `index.html` bằng Chrome, không cần cài thư viện.

Codex AI đã tải file và bật GitHub Pages trên nhánh `main`, thư mục `/ (root)`. Không cần tạo repository khác hoặc xuất bản lại từ đầu. Người học tự nộp bài trên LMS.

## 2. Việc sinh viên thực hiện trước khi nộp

1. Đọc `README.md`, `KHAO_SAT.md` và `docs/GIAI_THICH_CODE.md` để hiểu vấn đề được chọn và cách code giải quyết.
2. Tự mở trang; thử mở thông tin phiên bản, kiểm tra bốn sản phẩm và các liên kết. Dùng F12 → Ctrl + Shift + M để kiểm tra màn hình nhỏ.
3. Đối chiếu nhận xét khảo sát với FAHASA, thêm nhận xét của bản thân. Không nhận các thao tác do AI thực hiện là trải nghiệm tự làm.
4. Tự phát hiện và chỉnh ít nhất một điểm, ghi lý do, file đã sửa và kết quả tại `docs/TU_KIEM_TRA_CA_NHAN.md`. Phiếu hiện chưa được điền thay sinh viên.
5. Giữ `AI_USAGE.md` đúng với mức hỗ trợ thực tế; cập nhật nếu sử dụng thêm AI.

## 3. Mở repository trong VS Code để học và chỉnh sửa

Nếu muốn có bản sao kèm lịch sử Git, mở Terminal ở thư mục cha bạn muốn lưu và chạy:

```powershell
git clone https://github.com/QuangDuc-qidu/ptudtmdt-chuong1-fahasa-ui.git
```

Trong VS Code chọn File → Open Folder → chọn thư mục vừa clone. Thư mục này đã liên kết remote GitHub; không cần chạy lại `git init` hoặc `git remote add`.

Sau khi tự sửa file và kiểm tra trang, chạy trong thư mục vừa clone:

```powershell
git status
git diff
git add .
git commit -m "Update after personal review"
git push
```

Chỉ thêm file thuộc bài làm. Nếu Git hỏi danh tính commit, cấu hình tên/email của bạn cho repository. Nếu cần xác thực, làm theo luồng đăng nhập GitHub trên trình duyệt. VS Code và GitHub là hai bước riêng: mở được file không đồng nghĩa đã đăng nhập để push.

Sau khi push, chờ GitHub Actions hoàn thành rồi mở lại trang Pages. Nếu file đã được sửa trên GitHub, dùng `git pull` trước khi sửa tiếp tại máy để lấy phiên bản mới nhất.

## 4. Tự nộp trên LMS

- Kiểm tra repository Public mở được source, bảng khảo sát và README.
- Kiểm tra nhật ký AI và phần tự kiểm tra của mình đã cập nhật trung thực.
- Nếu nộp ZIP sau khi tự chỉnh sửa, tạo lại ZIP từ bản mới; không dùng ZIP cũ để nộp một phiên bản khác với GitHub.
- PDF đề bài chưa nêu rõ ô nộp LMS cần link, ZIP hay tài liệu khác. Xem hướng dẫn tại **bài tập cá nhân** trên LMS và nộp đúng định dạng/hạn hiển thị ở đó; không lấy hạn bài nhóm áp sang bài cá nhân.
- GitHub Pages là phần bổ sung để xem nhanh. Repository Public chứa mã nguồn là yêu cầu riêng của đề bài.

Tài liệu thao tác chính thức: [GitHub trong VS Code](https://code.visualstudio.com/docs/sourcecontrol/github), [GitHub Pages](https://docs.github.com/en/pages).
