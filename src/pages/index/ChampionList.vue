<template>
  <section id="champions" class="relative pt-1">
    <ul class="snap-y">
      <li v-for="champion in champions" :key="champion.year" :id="'year-' + champion.year" class="py-4 snap-end">
        <ChampionItem :champion="champion" :active="this.activeChampion === champion"></ChampionItem>
      </li>
    </ul>

    <div id="selectedYear"
         class="fixed top-0 h-screen flex items-center justify-center sm:right-2 md:right-4 lg:right-10 xl:right-20 z-0">
      <h2 v-if="activeChampion" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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
        const scrollPosMidMore = scrollPosMid - (windowHeight / 20);
        if ( !this.champions ) // wait until the list is set up
          return;
        if ( scrollPosTop < 3 ) { // if they are scrolled to the top, should always show the first one
          this.activeChampion = this.champions[0];
          return;
        }
        // if they are scrolled to the bottom, should always show the last one
        if ( scrollPosTop + windowHeight + 3 > document.documentElement.scrollHeight ) {
          this.activeChampion = this.champions[this.champions.length - 1];
          return;
        }
        this.champions.forEach((champion) => {
          const el = document.querySelector(`#year-${champion.year}`);
          const elTop = el.offsetTop;
          const elBottom = el.offsetTop + el.scrollHeight;
          if (scrollPosMidMore >= elTop && scrollPosMidMore <= elBottom) {
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
