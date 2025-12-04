<!--  ESSE DAQUI é da biblioteca e dos produtos -->

<div class="grid:product-area">
    <ul class="product-list">
        <li class="product">
            <div class="product-image">
                <img src="" alt="">
            </div>
            <div class="product-content">
                <div>
                    <h2>Nome da Obra</h2>
                    emoji de carrinho
                </div>
                <div class="rating">Rating da obra</div>
                <div>
                    <p data-testid="price-original" font-size="0,1" color="text.scratched" class="price-original">
                        R$&nbsp;99,90</p>
                </div>
                <div class="sc-fqkvVR kqgDtZ">
                    <p data-testid="price-value" font-weight="medium" class="" color="#404040">R$&nbsp;62,61</p><span
                        data-testid="in-cash" class="sc-fUkmAC dbDSZZ">no Pix<!-- --> </span>
                </div>
            </div>
        </li>
        <li class="product">
            <div class="product-image"></div>
            <div class="product-content"></div>
        </li>
        <li class="product">
            <div class="product-image"></div>
            <div class="product-content"></div>
        </li>
    </ul>
</div>








<!-- JS CARROSEL -->
// Carrossel 2: highlight-carousel (com bolinhas)
const highlightTrack = document.querySelector('.highlight-track');
const highlightDots = document.querySelectorAll('.highlight-dots .dot');
const highlightPrev = document.querySelector('.highlight-nav.prev');
const highlightNext = document.querySelector('.highlight-nav.next');

let currentHighlight = 0;
const totalHighlightSlides = highlightDots.length;

function updateHighlightCarousel() {
  highlightTrack.style.transform = `translateX(-${currentHighlight * 100}%)`;

  highlightDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentHighlight);
  });
}

highlightNext.addEventListener('click', () => {
  currentHighlight = (currentHighlight + 1) % totalHighlightSlides;
  updateHighlightCarousel();
});

highlightPrev.addEventListener('click', () => {
  currentHighlight = (currentHighlight - 1 + totalHighlightSlides) % totalHighlightSlides;
  updateHighlightCarousel();
});

highlightDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentHighlight = index;
    updateHighlightCarousel();
  });
});





<!-- HTML CARROSEl -->
<section class="highlight-carousel">
  <div class="carousel-wrapper">
    <button class="highlight-nav prev">&#10094;</button>

    <div class="highlight-track">
      <!-- Card 1 -->
      <div class="highlight-card" style="background-image: url('img/pearl.jpg')">
        <div class="overlay">
          <h3>TOP 100 FILMES DE TERROR</h3>
          <p>Prepare-se para entrar no lado mais sombrio do cinema.</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="highlight-card" style="background-image: url('img/branquelas')">
        <div class="overlay white">
          <h3>#1 AS BRANQUELAS</h3>
          <p>Comédia</p>
        </div>
      </div>

      <!-- Card 3 - Banner fixo -->
      <div class="highlight-card download-card">
        <p>
          Baixe agora o <strong>Rotten Broccoli</strong> no seu celular e descubra críticas, listas e avaliações de filmes de um jeito divertido e único.
        </p>
      </div>
    </div>

    <button class="highlight-nav next">&#10095;</button>
  </div>

  <div class="highlight-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</section>







<!-- Carrosel de cards  -->
https://bytewebster.com/javascriptprojects/responsive-carousel-using-html-css-flexbox-and-swiperjs


<!-- minha versao -->
section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  overflow: hidden;
}

.deslizar {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.deslizar-slide {
  width: 300px;
  height: 400px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  filter: blur(1px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
}

.deslizar-slide-active {
  filter: blur(0px);
}

.deslizar-pagination-bullet,
.deslizar-pagination-bullet-active {
  background: #fff;
}

.deslizar-slide span {
  text-transform: uppercase;
  color: #fff;
  background: #1b7402;
  padding: 7px 18px 7px 25px;
  display: inline-block;
  border-radius: 0 20px 20px 0px;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-family: "Open Sans", sans-serif;
}

.deslizar-slide--1 span {
  background: #62667f;
}

.deslizar-slide--2 span {
  background: #087ac4;
}

.deslizar-slide--3 span {
  background: #b45205;
}

.deslizar-slide--4 span {
  background: #087ac4;
}

.deslizar-slide h2 {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 15px;
  padding: 25px 45px 0 25px;
}

.deslizar-slide p {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  padding: 0 25px 35px 25px;
}

.deslizar-slide svg {
  color: #fff;
  width: 22px;
  height: 22px;
  margin-right: 7px;
}

.deslizar-slide--1 {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url(https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)
      no-repeat 50% 50% / cover;
}

.deslizar-slide--2 {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1571900670723-a317a66e3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80")
      no-repeat 50% 50% / cover;
}

.deslizar-slide--3 {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
      no-repeat 50% 50% / cover;
}

.deslizar-slide--4 {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1650367310179-e1b5b8e453c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      no-repeat 50% 50% / cover;
}

.deslizar-slide--5 {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1596521864207-13d46b1a0c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")
      no-repeat 50% 50% / cover;
}

.deslizar-3d .deslizar-slide-shadow-left,
.deslizar-3d .deslizar-slide-shadow-right {
  background-image: none;
}






        <section id="maisVendidos">
            <div class="deslizar">
                <div class="deslizar-wrapper">
                    <div class="deslizar-slide_deslizar-slide--1">
                        <span></span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </div>
                    </div>
                    <div class="deslizar-slide_deslizar-slide--2">
                        <span></span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </div>
                    </div>
                    <div class="deslizar-slide_deslizar-slide--3">
                        <span></span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </div>
                    </div>
                    <div class="deslizar-slide_deslizar-slide--4">
                        <span></span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </div>
                    </div>
                    <div class="deslizar-slide_deslizar-slide--5">
                        <span></span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </div>
                    </div>
                </div>  
                <div class="deslizar-numeracao"></div> 
            </div>
        </section>