/**
 * ====================================================================
 * KHU VỰC CẤU HÌNH THIỆP CHÚC MỪNG 19/11 - HAPPY MEN'S DAY
 * ====================================================================
 * Đã cập nhật đầy đủ thông tin cá nhân theo yêu cầu:
 * - Tên người nhận: "Người thương"
 * - Tiêu đề bức thư: "Gửi đến một người đặc biệt..."
 * - Lời chúc: Đầy đủ, ấm áp và trọn vẹn cảm xúc
 * - Chữ ký: "Cáo tôi cai 🦊"
 * - Hình ảnh: Đã trích xuất chính xác ảnh meme1.jpg từ ảnh đính kèm
 */

const cardConfig = {
    // 1. TÊN NGƯỜI NHẬN
    recipient: "Người thương",

    // 2. TIÊU ĐỀ TRANG TRÍ (Tiếng Anh phong cách thiết kế)
    title: "Happy Men's Day",
    subtitle: "INTERNATIONAL MEN'S DAY",
    dateText: "19.11",

    // 3. TIÊU ĐỀ BỨC THƯ
    greetingTitle: "Gửi đến một người đặc biệt...",

    // 4. NỘI DUNG LỜI CHÚC CHÍNH (Đã được định dạng phân đoạn đẹp mắt)
    message: `Happy Men's Day!! Chúc anh luôn bình tĩnh, tự tin và thành công với những gì bản thân chọn và quyết định.

Mong mọi điều anh cố gắng đều có kết quả, mọi dự định trong tương lai đều thuận lợi nha.

Mệt mỏi thì dừng lại 1 tý cũng không sao. Vì bình thường người ta có câu: "Chậm mà chắc". Nên là chậm 1 chút cũng không sao, mệt 1 chút cũng chẳng sao cả. ❤️!!!`,

    // 5. THÔNG ĐIỆP TRANG TRÍ PHỤ
    tagline1: "Thank you for being you.",
    tagline2: "Chúc anh luôn bình an trên hành trình của mình.",

    // 6. THÔNG ĐIỆP KẾT THÚC VÀ TÊN NGƯỜI GỬI (CHỮ KÝ)
    closingWish: "Chúc anh một ngày thật đặc biệt.",
    closingBadge: "19.11 – Happy Men's Day",
    sender: "Cáo tôi cai 🦊",

    // 7. KHU VỰC HÌNH ẢNH
    // Đã tích hợp ảnh meme1.jpg
    mainImage: "assets/images/meme3.jpg",
    mainImageCaption: "Gửi chút đáng yêu và bình yên đến anh ✨",

    // Vì chỉ có 1 ảnh nên danh sách gallery để trống để giao diện tinh gọn, tập trung
    gallery: [],
    galleryCaptions: [],

    // 8. CÁC TÙY CHỌN HIỆU ỨNG (true: Bật, false: Tắt)
    effects: {
        particles: true,       // Bụi sáng vàng champagne & ngôi sao lấp lánh
        floatingPetals: true,  // Cánh hoa trắng / lá rơi nhẹ nhàng
        cinematicGlow: true,   // Ánh sáng mờ ảo ấm áp
        smoothScroll: true     // Cuộn trang mượt mà
    }
};

// Đảm bảo cardConfig sẵn sàng cho cả trình duyệt và module nếu có
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cardConfig;
}
