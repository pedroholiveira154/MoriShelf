// Seletores
const highlightTrack = document.querySelector('.highlight-track');
const highlightDots = document.querySelectorAll('.highlight-dots .dot');
const highlightPrev = document.querySelector('.highlight-nav.prev');
const highlightNext = document.querySelector('.highlight-nav.next');
const highlightCards = document.querySelectorAll('.highlight-card');

// Estado
let currentHighlight = 0;
const totalHighlightSlides = highlightCards.length;

// Atualiza posicionamento e bolinhas
function updateHighlightCarousel() {
  highlightTrack.style.transform = `translateX(-${currentHighlight * 100}%)`;

  highlightDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentHighlight);
  });
}

// Botão PRÓXIMO
highlightNext.addEventListener('click', () => {
  currentHighlight++;
  if (currentHighlight >= totalHighlightSlides) {
    currentHighlight = 0;
  }
  updateHighlightCarousel();
});

// Botão ANTERIOR
highlightPrev.addEventListener('click', () => {
  currentHighlight--;
  if (currentHighlight < 0) {
    currentHighlight = totalHighlightSlides - 1;
  }
  updateHighlightCarousel();
});

// Clique nas bolinhas
highlightDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentHighlight = index;
    updateHighlightCarousel();
  });
});

// Ajuste inicial
updateHighlightCarousel();

// var swiper = new Swiper(".swiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true
//   },
//   spaceBetween: 60,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   }
// });
