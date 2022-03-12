<template>
  <HeaderSection/>
  <main>
    <h1>319 Boys &ndash; Fantasy Football Legends Compendium</h1>
    <p class="sm:text-xl">Presenting... your 2021 champion.... drum roll...</p>
    <ChampionList/>
  </main>
</template>

<script>
import ChampionList from '@/pages/index/ChampionList.vue';
import HeaderSection from "@/components/HeaderSection";

export default {
  name: 'PageIndex',
  components: {
    HeaderSection,
    ChampionList,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
