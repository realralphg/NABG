<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.news .q-carousel {
  background-color: #fff;
  height: 100%;
}

.slick-list {
  padding: 4rem 0 !important;
}
.slick-dots {
  bottom: 20px !important;
}

@media (max-width: 500px) {
  .slick-dots {
    bottom: 0px !important;
  }

  .flexer {
    display: flex;
    flex-direction: column-reverse;
  }

  .removeM {
    margin: 0 !important;
  }
  .removeP {
    padding: 0 !important;
  }
  .slick-dots li {
    margin: 0 0 !important;
  }
  .slick-list {
    padding: 2rem 0 3rem !important;
  }
}
</style>
