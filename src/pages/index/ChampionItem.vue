<template>
  <figure>
    <img :src="'https://mekane84.github.io/319-boys-assets/' + champion.image"
         :alt="'Picture of ' + champion.champion + ' owner ' + champion.owner"
         class="rounded">
    <figcaption class="lg:text-xl"> {{champion.year}} Champion &ndash; {{champion.champion}}, {{champion.owner}}  </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ChampionItem',
  props: {
    champion: Object
  },
};
</script>

<style scoped>
img {
  margin: auto;
  width: 70%;
  max-width: 800px;
}
</style>
