<template>
  <Header/>
  <main>
    <h1>Stats page</h1>

    <section id="dynamic-table">
      <table>
        <caption>Winners by Year</caption>
        <thead>
        <tr>
          <th scope="col">Year</th>
          <th>Champion</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(champion, index) in yearlyDataList" :key="index">
          <td>{{champion.year}}</td>
          <td>{{champion.champion}}</td>
        </tr>
        </tbody>
      </table>
    </section>

    <section id="charts-section">

      <!-- Fake Stat Section #1 -->
      <div class="stat">
        <figure class="image-graph-container">
          <img class="image-graph" alt="Graph Description"
               src="@/pages/stats/assets/fake-charts-by-type.jpg">
          <figcaption>Proof Michael is best fantasy player</figcaption>
        </figure>
      </div>

      <!-- Fake Chart #2 -->
      <div class="stat">
        <figure class="image-graph-container">
          <img class="image-graph image-fit" alt="Graph Description"
               src="@/pages/stats/assets/fake-charts-by-type.jpg">
          <figcaption>Proof Aaron is worst.  Long description testing, more long description, more
            text, more text, more text, more text, more text, more text, more text, more text, more
            text, more text, more text, more text, more text, more text, more text</figcaption>
        </figure>
      </div>

      <!-- Fake Chart #3 -->
      <div class="stat">
        <figure class="image-graph-container">
          <img class="image-graph image-fit" alt="Graph Description"
               src="../../../public/bar-chart.png">
          <figcaption>Long description testing, more long description, more
            text, more text, more text, more text, more text, more text, more text, more text, more
            text, more text, more text, more text, more text, more text, more text</figcaption>
        </figure>
      </div>

    </section>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import yearlyData from '../../../public/data';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      yearlyDataList: yearlyData,
    };
  },
};
</script>

<style>
#charts-section {
  @apply grid gap-10;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

figure {
  width: 100%;
  height: 100%;
  max-width: min(500px, 90vh);
  max-height: min(500px, 90vh);
  min-width: 100px;
  min-height: 100px;
}
/*.image-fit {*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  object-fit: fill;*/
/*}*/
</style>
