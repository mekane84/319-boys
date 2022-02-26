<template>
  <section id="champions" class="relative">
    <ul>
      <li v-for="champion in champions" :key="champion.year" :id="'year-' + champion.year" class="my-4">
        <ChampionItem :champion="champion" :active="this.activeChampion === champion"></ChampionItem>
      </li>
    </ul>

    <div id="selectedYear"
         class="fixed top-0 h-screen flex items-center justify-center sm:right-2 md:right-4 lg:right-10 xl:right-20">
      <h2 v-if="activeChampion" class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
        {{activeChampion.year}}
      </h2>
    </div>

    <!-- todo: as your scroll down, show more champions, and enlarge image as you go down -->
  </section>
</template>

<script>
import ChampionItem from '@/pages/index/ChampionItem.vue';

export default {
  name: 'ChampionList',
  components: {
    ChampionItem,
  },
  mounted() {
    const thisVue = this;
    fetch('https://mekane84.github.io/319-boys-assets/stats/champions.json')
      .then((response) => response.json())
      .then((data) => {
        thisVue.champions = data;
        const [firstChamp] = thisVue.champions;
        thisVue.activeChampion = firstChamp;
        thisVue.$nextTick(thisVue.setupScrollSpy);
      });
  },
  data() {
    return {
      champions: [],
      activeChampion: null,
    };
  },
  methods: {
    setupScrollSpy() {
      window.onscroll = () => {
        const scrollPosTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollPosMid = scrollPosTop + (windowHeight / 2);
        this.champions.forEach((champion) => {
          const el = document.querySelector(`#year-${champion.year}`);
          const elTop = el.offsetTop;
          const elBottom = el.offsetTop + el.scrollHeight;
          if (scrollPosMid >= elTop && scrollPosMid <= elBottom) {
            this.activeChampion = champion;
          }
        });
      };
    },
  },
};
</script>

<style scoped>

</style>
