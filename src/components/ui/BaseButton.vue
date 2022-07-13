<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: { type: String, required: false, default: null },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #eb1d36;
  border: 1px solid #eb1d36;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #eb1d36;
  border-color: #eb1d36;
}

.flat {
  background-color: transparent;
  color: #eb1d36;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #eb1d36;
  color: #eb1d36;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffd2d2;
}
</style>
