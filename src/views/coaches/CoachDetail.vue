<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button @click="goContact">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="item in selectedCoach.areas"
        :key="item"
        :title="item"
        :type="item"
      ></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
  },
  methods: {
    goContact() {
      this.$router.push({ name: 'contact', params: { id: this.id } });
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/getCoaches'].find(
      (el) => el.id === this.id
    );
  },
};
</script>
