<template>
  <div class="container-g">
    <div data-lightbox="homePortfolio">
      <img src="/images/g1.jpg" />
    </div>

    <div data-lightbox="homePortfolio" class="vertical">
      <img src="/images/g2.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="">
      <img src="/images/g3.jpg" />
    </div>

    <div class="horizontal">
      <img src="/images/g4.jpg" />
      <!-- <img src="/images/babo11.jpg" /> -->
    </div>

    <div data-lightbox="homePortfolio">
      <img src="/images/g5.jpg" />
    </div>

    <div data-lightbox="homePortfolio">
      <img src="/images/g6.jpg" />
    </div>

    <div data-lightbox="homePortfolio" class="big">
      <img src="/images/g7.jpg" />
    </div>

    <div data-lightbox="homePortfolio">
      <img src="/images/g8.jpg" />
    </div>

    <div data-lightbox="homePortfolio" class="vertical">
      <img src="/images/g9.jpg" />
    </div>

    <div data-lightbox="homePortfolio">
      <img src="/images/g16.jpg" />
    </div>

    <div data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/g11.jpg" />
    </div>

    <div data-lightbox="homePortfolio">
      <img src="/images/g12.jpg" />
    </div>

    <div data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/g13.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/g14.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="vertical">
      <img src="/images/g15.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="vertical">
      <img src="/images/g10.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="">
      <img src="/images/g17.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="">
      <img src="/images/g18.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/g19.jpg" />
    </div>
    <div data-lightbox="homePortfolio" class="">
      <img src="/images/g20.jpg" />
    </div>

    <!-- <div  data-lightbox="homePortfolio">
      <img src="/images/boss2.jpg" />
    </div>

    <div  data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/boss2.jpg" />
    </div>

    <div  data-lightbox="homePortfolio" class="center">
      <img src="/images/boss2.jpg" />
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-g > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.container-g > div:hover {
  transform: scale(1.1);
}

.container-g > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 2px 16px var(--shadow);
  object-position: top;
}

.container-g {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
  width: 80%;
  margin: 2rem auto;
}

.horizontal {
  grid-column: span 2;
  grid-row: span 2;
}

.horizontal {
  grid-column: span 2;
  grid-row: span 1;
}
.vertical {
  grid-row: span 2;
  grid-column: span 2;
  /* grid-row: span 3; */
}
.center {
  grid-column: span 3;
  /* grid-row: span 3; */
}

.big {
  grid-column: span 3;
  grid-row: span 2;
}

@media (max-width: 500px) {
  .horizontal {
    grid-column: span 1;
    grid-row: span 1;
  }

  .horizontal {
    grid-column: span 1;
    grid-row: span 1;
  }
  .vertical {
    grid-row: span 1;
    grid-column: span 1;
    /* grid-row: span 3; */
  }
  .center {
    grid-column: span 1;
    /* grid-row: span 3; */
  }

  .big {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
