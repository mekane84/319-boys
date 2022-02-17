<template>
  <img :alt="champion.year + ' Fantasy Football Champion'"
       :src="'https://mekane84.github.io/319-boys-assets/' + champion.image">
  <div class="year" :class="{'active': active}">{{ champion.year }}</div>
</template>

<script>
export default {
  name: 'Champion',
  props: {
    champion: Object,
    active: Boolean,
  },
};
</script>

<style scoped>
img {
  margin: auto;
  width: 80vw;
  max-width: 800px;
}
.active {
  color: red;
}
</style>
