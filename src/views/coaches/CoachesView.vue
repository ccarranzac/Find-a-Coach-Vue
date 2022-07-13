<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link :to="{ name: 'register' }">Register as Coach</router-link>
    </div>
    <ul v-if="haveCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :coach="coach"
      ></coach-item>
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getCoaches'];
    },
    haveCoaches() {
      return this.$store.getters['coaches/haveCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
