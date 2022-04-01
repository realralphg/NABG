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

.leadership{
  font-weight: 300;
  text-transform: capitalize;
  line-height: 1.5;
font-size: 15.5px;
}

@media(max-width: 1023px){
  .leader{
  display: none;
}

}


</style>
