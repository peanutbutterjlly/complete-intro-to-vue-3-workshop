<template>
  <li>
    <div>Name: {{ user.name }}</div>
    <div>Username: {{ user.username }}</div>
    <div>Email: {{ user.email }}</div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
li {
  border: 1px solid #ccc;
  border-radius: 1rem;
  flex: 1 minmax(auto, 250px);
  list-style: none;
  padding: 2rem 1rem;
}
</style>
