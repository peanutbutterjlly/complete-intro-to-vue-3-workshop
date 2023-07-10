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
  components: {
    UserCard,
  },
  created() {
    this.fetchUsers();
  },
  data: () => ({
    currentPage: "UsersPage",
    users: [{}, {}, {}, {}],
  }),
  methods: {
    /**
     * Fetches users from a remote API and stores them in the component's data property.
     *
     * @return {Promise<void>} - A promise that resolves once the users have been fetched and stored.
     */
    async fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    },
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
