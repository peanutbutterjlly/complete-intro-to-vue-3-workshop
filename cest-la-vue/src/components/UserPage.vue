<template>
  <div class="wrapper">
    <h1>Users</h1>
    <ul>
      <UserCard v-for="user in users" :key="`user-${user.id}`" :user="user" />
    </ul>
  </div>
</template>

<script>
import UserCard from "./UserCard.vue";
export default {
  async setup() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return { users };
  },
  components: {
    UserCard,
  },
};
</script>

<style>
h1 {
  margin-bottom: 2rem;
  text-align: center;
}
.wrapper {
  margin-block: 2rem;
  margin-inline: auto;
  width: min(70rem, 90%);
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
