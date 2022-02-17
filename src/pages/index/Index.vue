<template>
  <Header/>
  <main>
    <h1>319 Boys &ndash; Fantasy Football Legends Compendium</h1>
    <p>Presenting... your 2021 champion.... drum roll...</p>
    <Champions></Champions>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Champions from '@/pages/index/Champions.vue';

export default {
  name: 'Index',
  components: {
    Champions,
    Header,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
