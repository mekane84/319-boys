<template>
  <Header/>
  <main>
    <h1>Stats page</h1>

    <section id="Aaron stats articles" class="mb-8">
      <article>
        Weekly points by year
        <ul>
          <li>
            <a class="dec" href="https://mekane84.github.io/319-boys-assets/pages/weekly-points/2021.html" target="_blank">2021</a>
          </li>
        </ul>
      </article>
    </section>

    <section id="ui-table">
      <Table :people="peopleList"/>
    </section>

    <!-- todo: allow sorting this table -->

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
import Table from '@/components/Table.vue';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

export default {
  name: 'App',
  components: {
    Header, Table,
  },
  mounted() {
    const thisVue = this;
    fetch('https://mekane84.github.io/319-boys-assets/stats/yearlyData.json')
      .then((response) => response.json())
      .then((data) => { thisVue.yearlyDataList = data; });
  },
  data() {
    return {
      yearlyDataList: [],
      peopleList: people,
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
