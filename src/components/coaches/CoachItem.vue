<template>
  <li>
    <h3>{{ coach.firstName + ' ' + coach.lastName }}</h3>
    <h4>${{ coach.hourlyRate }}/hour</h4>
    <div>
      <base-badge
        v-for="item in coach.areas"
        :key="item"
        :type="item"
        :title="item"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" @click="goContact">Contact</base-button>
      <base-button @click="goDetail">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
  props: {
    coach: { type: Object, required: true },
  },
  methods: {
    goContact() {
      this.$router.push({ name: 'contact', params: { id: this.coach.id } });
    },
    goDetail() {
      this.$router.push({
        name: 'coach-detail',
        params: { id: this.coach.id },
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
