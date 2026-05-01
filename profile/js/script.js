// =====================
// 共通スクロールアニメーション
// =====================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,                 // ← 即発火に近くする
  rootMargin: "0px 0px -20% 0px" // ← 下を縮める
});

// 要素単位（introとか）
document.querySelectorAll('.fadeUp').forEach(el => {
  fadeObserver.observe(el);
});

// セクション単位（profileとか）
document.querySelectorAll('.js-fade-section').forEach(el => {
  fadeObserver.observe(el);
});

// セクション単位（写真エリア）
document.querySelectorAll('.pic_area_text').forEach(el => {
  fadeObserver.observe(el);
});

// セクション単位（ストーリー）
document.querySelectorAll('.story-header').forEach(el => {
  fadeObserver.observe(el);
});

// お気に入りタイトル
document.querySelectorAll('.favorite-title').forEach(el => {
  fadeObserver.observe(el);
});

// アイキャッチ
document.querySelectorAll('.eye_catch').forEach(el => {
  fadeObserver.observe(el);
});




//スライダー
const swiper = new Swiper(".mySwiper", {

slidesPerView:1.6,
centeredSlides:true,
spaceBetween:20,
loop:true,

speed:1200,

autoplay:{
delay:3500,
disableOnInteraction:false
},

pagination:{
el:".swiper-pagination",
clickable:true
}

});




//ストーリーの線が伸びる
const scrollArea = document.querySelector('.story-scroll');
const timeline = document.querySelector('.timeline');

scrollArea.addEventListener('scroll', () => {
  const scrollTop = scrollArea.scrollTop;
  const scrollHeight = scrollArea.scrollHeight - scrollArea.clientHeight;

  const percent = (scrollTop / scrollHeight) * 100;

  timeline.style.setProperty('--line-height', percent + '%');
});



//一問一答
// タイトル
document.querySelectorAll('.qa_title').forEach(el => {
  fadeObserver.observe(el);
});

// テキスト・画像
document.querySelectorAll('.qa-text, .qa-image').forEach(el => {
  fadeObserver.observe(el);
});

// QAアイテム（ブロックごとに順番）
document.querySelectorAll('.qa-block').forEach(block => {
  const items = block.querySelectorAll('.qa-item');

  items.forEach((el, i) => {
    el.style.transitionDelay = (0.2 + i * 0.15) + 's';
    fadeObserver.observe(el);
  });
});



//お気に入り
const favos = document.querySelectorAll(".favorite");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      el.classList.add("show");

      // 子要素も発火
      el.querySelector(".favo-grid")?.classList.add("show");
      el.querySelector(".favo-list")?.classList.add("show");

      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.2
});

favos.forEach(el => observer.observe(el));


//ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('show');
});

/* リンク押したら閉じる */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('show');
  });
});