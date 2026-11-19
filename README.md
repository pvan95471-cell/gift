# ✨ THIỆP CHÚC MỪNG 19/11 – HAPPY MEN'S DAY

Website thiệp chúc mừng trực tuyến cao cấp, tinh tế và cảm xúc nhân dịp **Ngày Quốc tế Nam giới 19/11 (International Men's Day)**. Được xây dựng hoàn toàn bằng **HTML, CSS và JavaScript thuần (Vanilla JS)**, không sử dụng framework nặng, tải nhanh và tương thích hoàn hảo từ điện thoại đến máy tính.

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT

1. **Phong cách thiết kế cao cấp (Premium & Cinematic)**:
   - Tông màu chủ đạo: **Trắng Be (White & Warm Beige: #FBF8F3, #FAF5ED, #ECE4D6)** kết hợp **Vàng Champagne (#B89358)** và viền dát vàng sang trọng.
   - Trưởng thành, lịch lãm, lãng mạn nhưng kín đáo, tinh tế, trang nhã như giấy mỹ thuật cao cấp.

2. **Trải nghiệm mở Hộp Quà 3D nảy nắp sinh động**:
   - Màn hình mở đầu với chiếc **hộp quà 3D màu trắng be** kèm chiếc nơ ruy băng vàng champagne bồng bềnh.
   - Khi bấm **"🎁 Mở hộp quà"**: Nắp hộp quà **nảy vút lên cao (pop-bounce)** nhún nhẩy sinh động, lá thư nhô lên từ trong hộp và ánh sáng vàng ấm cùng các hạt sao bung tỏa, chuyển cảnh mượt mà vào trang thiệp chính!

3. **Tính năng Gửi lại lời đáp (Reply)**:
   - Người nhận có thể nhập ngay đôi dòng cảm xúc hoặc lời nhắn gửi lại cho bạn.
   - Hỗ trợ lưu lời đáp trực tiếp và nút **"Sao chép lời nhắn"** để người ấy dễ dàng dán gửi qua Zalo / Tin nhắn chỉ trong 1 chạm.

4. **Khu vực kỷ niệm & Hình ảnh**:
   - Khung ảnh kỷ niệm vuông 1:1 tỉ lệ chuẩn, hiển thị trọn vẹn bức ảnh meme đáng yêu `meme1.jpg`.
   - Nhấn vào ảnh để mở chế độ **"Xem ảnh phóng to"** (Lightbox Modal).

5. **Khu vực lời chúc riêng tư**:
   - Được thiết kế như một bức thư tay trang trọng, khoảng cách dòng thoáng đãng, font chữ nghệ thuật thanh lịch.
   - Hiệu ứng xuất hiện mượt mà khi cuộn tới.

6. **Hiệu ứng nền sống động (Canvas Particles)**:
   - Các hạt bụi vàng champagne nhấp nháy chuyển động chậm rãi.
   - Những cánh hoa trắng / lá bay nhẹ trong gió, tạo cảm giác cinematic sâu lắng.
   - Tự động tối ưu hiệu năng: Tạm dừng khi chuyển tab để tiết kiệm pin trên điện thoại.

7. **100% Nút bấm tiếng Việt**:
   - `🎁 Mở hộp quà`
   - `💌 Gửi lời đáp`
   - `📋 Sao chép lời nhắn`
   - `Xem ảnh` / `✕ Đóng`
   - `↻ Mở lại hộp quà`
   - `↑ Trở về đầu trang`

---

## 📁 CẤU TRÚC DỰ ÁN

```
greeting-card/
│
├── index.html                           # Trang HTML chính của thiệp
├── css/
│   └── style.css                        # Toàn bộ hiệu ứng, 3D envelope, responsive
├── js/
│   ├── config.js                        # KHU VỰC CẤU HÌNH CÁ NHÂN HÓA (DỄ DÙNG)
│   └── script.js                        # Logic xử lý mở thiệp, nhạc, canvas, lightbox
├── assets/
│   ├── images/                          # Thư mục chứa ảnh cá nhân và đồ họa
│   │   ├── main.jpg                     # (Ảnh chính của bạn - tùy chọn)
│   │   ├── photo1.jpg                   # (Ảnh gallery 1 - tùy chọn)
│   │   ├── photo2.jpg                   # (Ảnh gallery 2 - tùy chọn)
│   │   ├── photo3.jpg                   # (Ảnh gallery 3 - tùy chọn)
│   │   ├── placeholder-main.svg         # Đồ họa khung ảnh chính sang trọng
│   │   ├── placeholder-photo1.svg       # Đồ họa Polaroid 1
│   │   ├── placeholder-photo2.svg       # Đồ họa Polaroid 2
│   │   ├── placeholder-photo3.svg       # Đồ họa Polaroid 3
│   │   ├── seal-star.svg                # Con dấu sáp vàng champagne 3D
│   │   └── flower-branch.svg            # Cành hoa trắng nghệ thuật
│   ├── music/
│   │   ├── background.mp3               # Nhạc nền piano không lời có sẵn
│   │   ├── background.wav               # Bản dự phòng lossless
│   │   └── README.txt                   # Hướng dẫn thay nhạc
│   └── fonts/
└── README.md                            # Hướng dẫn chi tiết
```

---

## ⚙️ HƯỚNG DẪN CÁ NHÂN HÓA THIỆP

Tất cả thông tin cá nhân đều được tập trung trong file:  
👉 **`js/config.js`**

Bạn chỉ cần mở file này bằng bất kỳ trình soạn thảo văn bản nào (như VS Code, Notepad) và chỉnh sửa các dòng tương ứng:

### 1. Thay tên người nhận
Tìm dòng:
```javascript
recipient: "", // Nhập tên người nhận, ví dụ: "Anh Minh", "Người thương", "Bạn thân"...
```
*Mẹo:* Nếu để trống `""`, thiệp sẽ tự động hiển thị tiêu đề chung: *"Gửi đến một người đặc biệt..."*.

### 2. Thay lời chúc chính (Quan trọng nhất)
Tìm dòng:
```javascript
message: `[Bạn hãy thêm lời chúc của mình tại đây]`,
```
Thay thế bằng lời chúc của bạn. Bạn có thể viết dài nhiều dòng tùy thích:
```javascript
message: `Nhân ngày 19/11, chúc anh luôn mạnh mẽ, kiên định và bình an trên con đường mình đã chọn.

Cảm ơn vì đã luôn là chỗ dựa vững chãi và mang lại những điều ấm áp. Chúc anh một ngày thật trọn vẹn và nhiều niềm vui!`,
```

### 3. Thay tên người gửi (Chữ ký cuối thiệp)
Tìm dòng:
```javascript
sender: "[Tên người gửi]", // Đổi thành tên hoặc biệt danh của bạn, ví dụ: "Thu Hà", "Từ một người luôn dõi theo bạn"...
```

### 4. Thay ảnh của bạn
1. Chuẩn bị ảnh của bạn:
   - **Ảnh chính**: Chọn 1 ảnh đẹp, đổi tên thành `main.jpg` rồi dán vào thư mục `assets/images/`.
   - **3 ảnh nhỏ**: Đổi tên thành `photo1.jpg`, `photo2.jpg`, `photo3.jpg` rồi dán vào thư mục `assets/images/`.
2. Kiểm tra trong `js/config.js`:
```javascript
mainImage: "assets/images/main.jpg",
gallery: [
    "assets/images/photo1.jpg",
    "assets/images/photo2.jpg",
    "assets/images/photo3.jpg"
],
```
*(Nếu bạn chưa có ảnh, cứ để nguyên hoặc để trống `""`, website sẽ tự hiển thị khung ảnh nghệ thuật dát vàng cao cấp)*.

### 5. Thay nhạc nền
- Chuẩn bị bài hát MP3 bạn yêu thích (khuyên dùng nhạc không lời nhẹ nhàng).
- Đổi tên bài hát thành `background.mp3` và ghi đè vào thư mục `assets/music/`.
- Hoặc đặt tên tùy ý (ví dụ: `assets/music/bai-hat-cua-toi.mp3`) và cập nhật đường dẫn trong `js/config.js`.

### 6. Bật/tắt hiệu ứng
Trong `js/config.js`:
```javascript
effects: {
    particles: true,       // Bật/tắt bụi sáng lấp lánh (true: bật, false: tắt)
    floatingPetals: true,  // Bật/tắt cánh hoa trắng bay nhẹ
    cinematicGlow: true,   // Bật/tắt ánh sáng cinematic
    smoothScroll: true     // Cuộn trang mượt
}
```

---

## 💻 HƯỚNG DẪN CHẠY THỬ TRÊN VS CODE (LIVE SERVER)

1. Mở **Visual Studio Code**.
2. Nhấn **File** -> **Open Folder...** -> Chọn thư mục dự án (`Thiepmoi`).
3. Nếu bạn chưa cài tiện ích mở rộng Live Server:
   - Nhấn tổ hợp phím `Ctrl + Shift + X` (mở tab Extensions).
   - Gõ tìm kiếm `Live Server` (tác giả Ritwick Dey) -> Bấm **Install**.
4. Nhấp chuột phải vào file **`index.html`** -> Chọn **Open with Live Server** (hoặc bấm nút **Go Live** ở góc dưới cùng bên phải màn hình VS Code).
5. Trình duyệt web sẽ tự động mở trang thiệp (thường là tại địa chỉ `http://127.0.0.1:5500/index.html`).

---

## 🚀 HƯỚNG DẪN ĐƯA LÊN GITHUB PAGES ĐỂ LẤY LINK GỬI CHO NGƯỜI NHẬN

Sau khi chỉnh sửa xong lời chúc và ảnh, bạn có thể xuất bản website thành một đường link trực tuyến hoàn toàn miễn phí qua **GitHub Pages**.

### Cách 1: Tải trực tiếp qua trình duyệt web (Dễ nhất, không cần cài Git)

1. Truy cập [github.com](https://github.com/) và đăng nhập tài khoản của bạn.
2. Bấm nút **New** (Tạo Repository mới):
   - **Repository name**: Đặt tên bất kỳ (ví dụ: `happy-mens-day` hoặc `for-you`).
   - Chọn chế độ **Public**.
   - Bấm **Create repository**.
3. Tại trang hiển thị repository mới:
   - Bấm vào dòng chữ **"uploading an existing file"**.
   - Kéo và thả toàn bộ các file & thư mục của dự án (`index.html`, thư mục `css`, `js`, `assets`) vào trình duyệt.
   - Bấm nút xanh **Commit changes**.
4. Kích hoạt GitHub Pages:
   - Vào mục **Settings** của repository (ở thanh menu trên cùng).
   - Ở cột bên trái, bấm vào **Pages**.
   - Tại mục **Build and deployment** -> **Branch**:
     - Chọn nhánh **main** (hoặc `master`).
     - Chọn thư mục **/ (root)**.
     - Bấm **Save**.
5. Đợi khoảng 1-2 phút, bạn sẽ thấy thông báo:
   > *"Your site is live at https://[tên-tài-khoản].github.io/[tên-repo]/"*
6. Sao chép đường link này và gửi tặng cho người đàn ông đặc biệt của bạn!

---

### Cách 2: Dùng Git dòng lệnh (Dành cho lập trình viên)

```bash
# Khởi tạo git và commit
git init
git add .
git commit -m "Thiết kế hoàn chỉnh thiệp Men's Day 19/11"

# Đổi nhánh sang main và liên kết repository của bạn
git branch -M main
git remote add origin https://github.com/[tên-tài-khoản]/[tên-repo].git
git push -u origin main
```
Sau đó vào **Settings** -> **Pages** trên GitHub và kích hoạt nhánh `main` như hướng dẫn ở trên.

---

## ❤️ THÔNG ĐIỆP Ý NGHĨA NGÀY 19/11

*"Mỗi người đàn ông đều mang trong mình những ước mơ, những trách nhiệm thầm lặng và hành trình không ngừng vươn lên. Chúc cho những người bạn yêu quý luôn giữ được nụ cười rạng rỡ, sự bình an trong tâm hồn và vững bước trên chặng đường phía trước."*
