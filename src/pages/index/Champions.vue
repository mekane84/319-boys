<template>
  <section id="champions">
    <ul>
      <li v-for="champion in champions" :key="champion.year" :id="'year-' + champion.year"
          class="my-4">
        <Champion :champion="champion" :active="this.activeChampion === champion"></Champion>
      </li>
    </ul>
    <!-- todo: as your scroll down, show more champions, and enlarge image as you go down -->
  </section>
</template>

<script>
import Champion from '@/pages/index/Champion.vue';

export default {
  name: 'Champions',
  components: {
    Champion,
  },
  mounted() {
    const thisVue = this;
    fetch('https://mekane84.github.io/319-boys-assets/stats/champions.json')
      .then((response) => response.json())
      .then((data) => {
        thisVue.champions = data;
        const [firstChamp] = thisVue.champions;
        thisVue.activeChampion = firstChamp;
        console.log(thisVue.activeChampion.year);
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
          console.log(scrollPosMid);
          const el = document.querySelector(`#year-${champion.year}`);
          console.log(`${champion.year} ${el.offsetTop} ${el.scrollHeight}`);
          const elTop = el.offsetTop;
          const elBottom = el.offsetTop + el.scrollHeight;
          console.log(elBottom);
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
