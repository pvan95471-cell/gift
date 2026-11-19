/**
 * ==========================================================================
 * THIỆP CHÚC MỪNG 19/11 - HAPPY MEN'S DAY
 * File xử lý JavaScript tương tác, Animation 3D, Âm thanh & Hiệu ứng Canvas
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. TẢI CẤU HÌNH TỪ CONFIG.JS (VỚI GIÁ TRỊ MẶC ĐỊNH AN TOÀN)
  // ------------------------------------------------------------------------
  const config = typeof cardConfig !== 'undefined' ? cardConfig : {
    recipient: "",
    title: "Happy Men's Day",
    subtitle: "INTERNATIONAL MEN'S DAY",
    dateText: "19.11",
    greetingTitle: "Gửi đến một người đặc biệt...",
    message: "[Bạn hãy thêm lời chúc của mình tại đây]",
    tagline1: "Thank you for being you.",
    tagline2: "Chúc anh luôn bình an trên hành trình của mình.",
    closingWish: "Chúc anh một ngày thật đặc biệt.",
    closingBadge: "19.11 – Happy Men's Day",
    sender: "[Tên người gửi]",
    mainImage: "assets/images/main.jpg",
    mainImageCaption: "Khoảnh khắc đáng trân trọng",
    gallery: [
      "assets/images/photo1.jpg",
      "assets/images/photo2.jpg",
      "assets/images/photo3.jpg"
    ],
    galleryCaptions: [
      "Khoảnh khắc đáng nhớ",
      "Nụ cười bình yên",
      "Hành trình phía trước"
    ],
    music: "assets/music/background.mp3",
    effects: {
      particles: true,
      floatingPetals: true,
      cinematicGlow: true,
      smoothScroll: true
    }
  };

  // ------------------------------------------------------------------------
  // 2. CẬP NHẬT GIAO DIỆN TỪ CẤU HÌNH (DOM INJECTION)
  // ------------------------------------------------------------------------
  function applyConfiguration() {
    // Tiêu đề & ngày tháng
    const headerDate = document.getElementById('headerDateText');
    const headerSubtitle = document.getElementById('headerSubtitleText');
    const headerTitle = document.getElementById('headerTitleText');
    const headerTag1 = document.getElementById('headerTagline1');

    if (headerDate && config.dateText) headerDate.textContent = config.dateText;
    if (headerSubtitle && config.subtitle) headerSubtitle.textContent = config.subtitle;
    if (headerTitle && config.title) headerTitle.textContent = config.title;
    if (headerTag1 && config.tagline1) headerTag1.textContent = `"${config.tagline1}"`;

    // Tiêu đề & người nhận trong thư
    const letterPreTitle = document.getElementById('letterPreTitleText');
    const greetingRecipient = document.getElementById('greetingRecipientTitle');

    if (letterPreTitle) {
      if (config.greetingTitle && config.greetingTitle.trim() !== '') {
        letterPreTitle.textContent = config.greetingTitle;
      } else {
        letterPreTitle.style.display = 'none';
      }
    }

    if (greetingRecipient) {
      if (config.recipient && config.recipient.trim() !== '') {
        greetingRecipient.textContent = `Gửi ${config.recipient.trim()},`;
      } else if (config.greetingTitle) {
        greetingRecipient.textContent = config.greetingTitle;
      }
    }

    // Nội dung lời chúc chính
    const letterContent = document.getElementById('letterContentContainer');
    if (letterContent && config.message) {
      letterContent.innerHTML = '';
      const paragraphs = config.message.split('\n').filter(p => p.trim() !== '');
      
      const isPlaceholder = config.message.includes('[Bạn hãy thêm lời chúc của mình tại đây]');

      paragraphs.forEach((para) => {
        const pElem = document.createElement('p');
        pElem.className = isPlaceholder ? 'letter-paragraph placeholder-message' : 'letter-paragraph';
        pElem.textContent = para;
        letterContent.appendChild(pElem);
      });
    }

    // Dòng thông điệp trang trí 2
    const letterTag2 = document.getElementById('letterTagline2');
    if (letterTag2 && config.tagline2) {
      letterTag2.innerHTML = `<p>${config.tagline2}</p>`;
    }

    // Màn hình kết thúc & Chữ ký người gửi
    const closingWish = document.getElementById('closingWishText');
    const closingBadge = document.getElementById('closingBadgeText');
    const senderName = document.getElementById('senderNameText');

    if (closingWish && config.closingWish) closingWish.textContent = config.closingWish;
    if (closingBadge && config.closingBadge) closingBadge.textContent = config.closingBadge;
    if (senderName && config.sender) senderName.textContent = config.sender;

    // Chú thích ảnh chính
    const mainPhotoCap = document.getElementById('mainPhotoCaptionText');
    if (mainPhotoCap && config.mainImageCaption) {
      mainPhotoCap.textContent = config.mainImageCaption;
    }

    // Thiết lập hình ảnh với cơ chế Fallback thông minh
    setupSmartImages();
  }

  // ------------------------------------------------------------------------
  // 3. XỬ LÝ HÌNH ẢNH THÔNG MINH (FALLBACK KHI CHƯA CÓ ẢNH THỰC TẾ)
  // ------------------------------------------------------------------------
  function setupSmartImages() {
    const mainImgElem = document.getElementById('mainPhotoImage');
    const fallbackMain = 'assets/images/placeholder-main.svg';

    if (mainImgElem) {
      // Khi ảnh lỗi hoặc file chưa tồn tại -> tự động chuyển sang placeholder sang trọng
      mainImgElem.onerror = function() {
        if (this.src !== fallbackMain && !this.src.endsWith(fallbackMain)) {
          this.src = fallbackMain;
          this.alt = 'Khung ảnh kỷ niệm (Vui lòng thay ảnh trong assets/images/)';
        }
      };

      if (config.mainImage && config.mainImage.trim() !== '') {
        mainImgElem.src = config.mainImage;
      } else {
        mainImgElem.src = fallbackMain;
      }
    }

    // Gallery ảnh nhỏ Polaroid (Nếu người dùng không có ảnh gallery thì ẩn tinh gọn)
    const galleryWrapper = document.getElementById('galleryWrapper');
    if (!config.gallery || config.gallery.length === 0) {
      if (galleryWrapper) galleryWrapper.style.display = 'none';
      return;
    } else {
      if (galleryWrapper) galleryWrapper.style.display = 'block';
    }

    const galleryItems = [
      { id: 'galleryImg0', capId: 'galleryCap0', fallback: 'assets/images/placeholder-photo1.svg', defaultIndex: 0 },
      { id: 'galleryImg1', capId: 'galleryCap1', fallback: 'assets/images/placeholder-photo2.svg', defaultIndex: 1 },
      { id: 'galleryImg2', capId: 'galleryCap2', fallback: 'assets/images/placeholder-photo3.svg', defaultIndex: 2 }
    ];

    galleryItems.forEach((item) => {
      const imgElem = document.getElementById(item.id);
      const capElem = document.getElementById(item.capId);

      if (capElem && config.galleryCaptions && config.galleryCaptions[item.defaultIndex]) {
        capElem.textContent = config.galleryCaptions[item.defaultIndex];
      }

      if (imgElem) {
        imgElem.onerror = function() {
          if (this.src !== item.fallback && !this.src.endsWith(item.fallback)) {
            this.src = item.fallback;
            this.alt = `Ảnh kỷ niệm ${item.defaultIndex + 1} (Vui lòng thay ảnh)`;
          }
        };

        if (config.gallery && config.gallery[item.defaultIndex] && config.gallery[item.defaultIndex].trim() !== '') {
          imgElem.src = config.gallery[item.defaultIndex];
        } else {
          imgElem.src = item.fallback;
        }
      }
    });
  }

  // Khởi chạy cập nhật nội dung
  applyConfiguration();


  // ------------------------------------------------------------------------
  // 4. ANIMATION MỞ HỘP QUÀ 3D NẢY NẮP (OPEN GIFTBOX EXPERIENCE)
  // ------------------------------------------------------------------------
  const openCardBtn = document.getElementById('openCardBtn');
  const giftboxElement = document.getElementById('giftboxElement');
  const openingScreen = document.getElementById('openingScreen');
  const mainCardContainer = document.getElementById('mainCardContainer');
  let isGiftboxOpen = false;

  function triggerOpenGiftbox() {
    if (isGiftboxOpen) return;
    isGiftboxOpen = true;

    // 1. Kích hoạt hiệu ứng mở nắp hộp quà: nắp nảy vút lên (lid pop-bounce)
    if (giftboxElement) {
      giftboxElement.classList.add('is-opened');
    }

    // 2. Sau 1.35 giây (thời gian nắp nảy nốt nhịp và dừng lơ lửng), chuyển cảnh sang trang thiệp
    setTimeout(() => {
      if (openingScreen) {
        openingScreen.classList.add('fade-out');
      }

      setTimeout(() => {
        if (openingScreen) {
          openingScreen.style.display = 'none';
        }
        if (mainCardContainer) {
          mainCardContainer.classList.remove('is-hidden');
          mainCardContainer.classList.add('fade-in');
          
          // Cuộn mượt mà lên đầu tấm thiệp
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          // Kích hoạt quan sát các mục cuộn vào
          initScrollReveal();
        }
      }, 700);
    }, 1350);
  }

  if (openCardBtn) {
    openCardBtn.addEventListener('click', triggerOpenGiftbox);
  }

  if (giftboxElement) {
    giftboxElement.addEventListener('click', triggerOpenGiftbox);
  }


  // ------------------------------------------------------------------------
  // 5. NÚT MỞ LẠI HỘP QUÀ & TRỞ VỀ ĐẦU TRANG
  // ------------------------------------------------------------------------
  const reopenCardBtn = document.getElementById('reopenCardBtn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Mở lại hộp quà từ đầu (Reset to opening screen)
  if (reopenCardBtn) {
    reopenCardBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        if (mainCardContainer) {
          mainCardContainer.classList.remove('fade-in');
          mainCardContainer.classList.add('is-hidden');
        }

        if (openingScreen) {
          openingScreen.style.display = 'flex';
          openingScreen.classList.remove('fade-out');
        }

        if (giftboxElement) {
          giftboxElement.classList.remove('is-opened');
        }

        isGiftboxOpen = false;
      }, 350);
    });
  }

  // Trở về đầu trang thiệp
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ------------------------------------------------------------------------
  // 6. TÍNH NĂNG GỬI LẠI LỜI ĐÁP (REPLY SYSTEM)
  // ------------------------------------------------------------------------
  const replyMessageInput = document.getElementById('replyMessageInput');
  const charCount = document.getElementById('charCount');
  const sendReplyBtn = document.getElementById('sendReplyBtn');
  const copyReplyBtn = document.getElementById('copyReplyBtn');
  const replySuccessBox = document.getElementById('replySuccessBox');
  const savedMessagePreview = document.getElementById('savedMessagePreview');

  // Đếm ký tự khi người nhận nhập
  if (replyMessageInput && charCount) {
    replyMessageInput.addEventListener('input', () => {
      const len = replyMessageInput.value.length;
      charCount.textContent = `${len}/600`;
    });
  }

  // Khôi phục lời đáp đã lưu từ trước (nếu có trên thiết bị này)
  const savedReply = localStorage.getItem('mensDayReplyMessage');
  if (savedReply && savedMessagePreview && replySuccessBox) {
    if (replyMessageInput) replyMessageInput.value = savedReply;
    if (charCount) charCount.textContent = `${savedReply.length}/600`;
    savedMessagePreview.textContent = `"${savedReply}"`;
    replySuccessBox.classList.remove('is-hidden');
  }

  // Toast thông báo nhỏ
  function showToast(message) {
    let toast = document.getElementById('customToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'customToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(36, 48, 64, 0.95);
        color: #FAF5ED;
        padding: 12px 24px;
        border-radius: 9999px;
        font-family: var(--font-sans);
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        border: 1px solid rgba(184, 147, 88, 0.5);
        z-index: 99999;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        opacity: 0;
        pointer-events: none;
        text-align: center;
        max-width: 90%;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3200);
  }

  // Xử lý khi nhấn nút "Gửi lời đáp"
  if (sendReplyBtn) {
    sendReplyBtn.addEventListener('click', () => {
      const text = replyMessageInput ? replyMessageInput.value.trim() : '';
      if (!text) {
        if (replyMessageInput) {
          replyMessageInput.focus();
          replyMessageInput.style.borderColor = '#C53030';
          setTimeout(() => {
            replyMessageInput.style.borderColor = '';
          }, 1500);
        }
        showToast('Anh hãy nhập vài dòng lời nhắn trước khi gửi nhé ❤️');
        return;
      }

      // Lưu vào LocalStorage
      localStorage.setItem('mensDayReplyMessage', text);

      // Hiển thị khung thành công
      if (savedMessagePreview) savedMessagePreview.textContent = `"${text}"`;
      if (replySuccessBox) replySuccessBox.classList.remove('is-hidden');

      // Tự động sao chép để tiện gửi
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }

      showToast('Đã lưu lời đáp thành công! Đã sao chép để anh tiện gửi tin nhắn ✨');
    });
  }

  // Xử lý khi nhấn nút "Sao chép lời nhắn"
  if (copyReplyBtn) {
    copyReplyBtn.addEventListener('click', () => {
      const text = replyMessageInput ? replyMessageInput.value.trim() : '';
      if (!text) {
        showToast('Chưa có nội dung lời nhắn để sao chép!');
        return;
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Đã sao chép lời nhắn! Anh có thể dán vào tin nhắn gửi cho Cáo ngay nhé 🦊');
        });
      } else {
        showToast('Đã sao chép lời nhắn!');
      }
    });
  }

  // Trở về đầu trang thiệp
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ------------------------------------------------------------------------
  // 7. LIGHTBOX XEM ẢNH PHÓNG TO (IMAGE MODAL)
  // ------------------------------------------------------------------------
  const imageModal = document.getElementById('imageModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalFullImage = document.getElementById('modalFullImage');
  const modalImageCaption = document.getElementById('modalImageCaption');

  function openImageModal(src, caption) {
    if (!imageModal || !modalFullImage) return;
    modalFullImage.src = src;
    if (modalImageCaption) {
      modalImageCaption.textContent = caption || '';
    }
    imageModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi xem ảnh
  }

  function closeImageModal() {
    if (!imageModal) return;
    imageModal.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

  // Gắn sự kiện cho ảnh chính lớn
  const mainPhotoFrame = document.getElementById('mainPhotoFrame');
  if (mainPhotoFrame) {
    mainPhotoFrame.addEventListener('click', () => {
      const img = document.getElementById('mainPhotoImage');
      const caption = document.getElementById('mainPhotoCaptionText');
      if (img) {
        openImageModal(img.src, caption ? caption.textContent : 'Khoảnh khắc đáng trân trọng');
      }
    });
  }

  // Gắn sự kiện cho các ảnh Polaroid trong gallery
  const polaroidCards = document.querySelectorAll('.polaroid-card');
  polaroidCards.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.gallery-img');
      const cap = card.querySelector('.caption-text');
      if (img) {
        openImageModal(img.src, cap ? cap.textContent : 'Kỷ niệm');
      }
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeImageModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeImageModal);

  // Nhấn ESC trên bàn phím để đóng modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeImageModal();
  });


  // ------------------------------------------------------------------------
  // 8. HIỆU ỨNG CUỘN TRANG (INTERSECTION OBSERVER REVEAL)
  // ------------------------------------------------------------------------
  function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');
    if (!revealItems.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealItems.forEach((el) => observer.observe(el));
    } else {
      // Fallback cho trình duyệt cũ
      revealItems.forEach((el) => el.classList.add('is-visible'));
    }
  }


  // ------------------------------------------------------------------------
  // 9. HIỆU ỨNG CANVAS: HẠT SÁNG VÀNG CHAMPAGNE & CÁNH HOA BAY NHẸ
  // ------------------------------------------------------------------------
  function setupParticlesCanvas() {
    if (!config.effects || !config.effects.particles) return;

    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Tạo danh sách hạt sáng vàng champagne
    const numParticles = Math.min(window.innerWidth < 768 ? 32 : 55, 60);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        color: Math.random() > 0.4 ? 'rgba(184, 147, 88, ' : 'rgba(205, 168, 108, ',
        baseAlpha: Math.random() * 0.5 + 0.25,
        alphaSpeed: Math.random() * 0.02 + 0.008,
        alphaOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.4 - 0.15 // Bay nhẹ lên trên
      });
    }

    // Tạo danh sách cánh hoa trắng hoặc lá bay nhẹ (nếu bật hiệu ứng)
    const petals = [];
    if (config.effects.floatingPetals) {
      const numPetals = window.innerWidth < 768 ? 10 : 16;
      for (let i = 0; i < numPetals; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 4,
          speedX: Math.random() * 0.5 + 0.2,
          speedY: Math.random() * 0.6 + 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          alpha: Math.random() * 0.45 + 0.35
        });
      }
    }

    let animationFrameId;
    let time = 0;

    function render() {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Vẽ các hạt sáng vàng champagne
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Vòng lặp biên màn hình
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Độ sáng nhấp nháy êm ái
        const currentAlpha = p.baseAlpha + Math.sin(time * 1.5 + p.alphaOffset) * 0.2;
        const safeAlpha = Math.max(0.1, Math.min(0.9, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + safeAlpha + ')';
        ctx.shadowColor = 'rgba(184, 147, 88, 0.4)';
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 2. Vẽ cánh hoa trắng nhẹ bay theo gió
      for (let i = 0; i < petals.length; i++) {
        const pt = petals[i];
        pt.x += pt.speedX + Math.sin(time + i) * 0.3;
        pt.y += pt.speedY;
        pt.rotation += pt.rotSpeed;

        if (pt.y > height + 20) {
          pt.y = -20;
          pt.x = Math.random() * width;
        }
        if (pt.x > width + 20) {
          pt.x = -20;
        }

        ctx.save();
        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.rotation);

        // Vẽ hình cánh hoa mềm mại
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(pt.size / 2, -pt.size, pt.size, -pt.size / 2, pt.size, pt.size);
        ctx.bezierCurveTo(pt.size / 2, pt.size * 1.3, 0, pt.size * 0.8, 0, 0);
        ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha})`;
        ctx.shadowColor = 'rgba(184, 147, 88, 0.15)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.strokeStyle = `rgba(215, 195, 170, ${pt.alpha * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    // Tạm dừng khi người dùng chuyển sang tab khác để tiết kiệm pin
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    });
  }

  setupParticlesCanvas();
});
