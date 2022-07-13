<template>
  <coach-filter @change-filter="setFilters"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button @click="goRegister">Register as Coach</base-button>
      </div>
      <ul v-if="haveCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :coach="coach"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/getCoaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    haveCoaches() {
      return this.$store.getters['coaches/haveCoaches'];
    },
  },
  methods: {
    goRegister() {
      this.$router.push({ name: 'register' });
    },
    setFilters(filters) {
      this.activeFilters = filters;
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
