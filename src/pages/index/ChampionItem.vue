<template>
  <img :alt="champion.year + ' Fantasy Football Champion'"
       :src="'https://mekane84.github.io/319-boys-assets/' + champion.image">
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
