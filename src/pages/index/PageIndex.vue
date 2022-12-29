<template>
  <HeaderSection/>
  <main>
    <h1 class="pt-2">319 Boys &ndash; Fantasy Football Legends</h1>
    <p class="sm:text-xl pt-4">Presenting... your current champion.... drum roll...</p>
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
