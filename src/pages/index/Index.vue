<template>
  <Header/>
  <main>
    <h1>319 Boys &ndash; Fantasy Football Legends Compendium</h1>
    <p>Presenting... your 2021 champion.... drum roll...</p>
    <img class="image-champion" alt="2021 Fantasy Football Champion"
         src="@/pages/index/assets/champion_2021.jpg">
    <p class="text-3xl">Happy New Year, Aaron!</p>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Index',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  text-align: center;
}
.image-champion {
  margin: auto;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 220px);
  min-height: 200px;
}
</style>
