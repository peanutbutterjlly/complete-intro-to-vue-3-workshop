<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      characters: [
        { name: 'Luke Skywalker', fav: false, sex: 'male', },
        { name: 'Darth Vader', fav: false, sex: 'male', },
        { name: 'Han Solo', fav: false, sex: 'male', },
        { name: 'Leia Organa', fav: false, sex: 'female', },
      ]
    };
  },
  computed: {
    genderCount() {
      return this.characters.filter(character => character.sex === 'male').length;
    }
  },
  methods: {
    addCharacter(event) {
      event.preventDefault();
      this.characters.push({
        name: event.target.form.name.value,
        sex: event.target.form.sex.value,
      });
    }
  }
}
</script>

<template>
  <header>
    <h1>Playground</h1>
  </header>
  <main>
    <ul v-if="characters.length">
      <li v-for="(character, index) in characters" :key="`char-${index}`">{{ character.name }}
        <button @click="character.fav = !character.fav">Favorite?</button>
      </li>
    </ul>
    <ul v-else>
      <li>No characters found</li>
    </ul>
    <ul v-for="(character, index) in characters" :key="`fav-${index}`">
      <li v-if="character.fav">Favorite: {{ character.name }}</li>
    </ul>
    <h2>Add a character</h2>
    <form>
      <label for="name">Name: </label>
      <input id="name" type="text" />
      <label for="sex">Sex: </label>
      <input id="sex" type="text" />
      <button @click="addCharacter">Submit</button>
    </form>
    <hr>
    <p>How many male characters are there? {{ genderCount }}</p>
  </main>
</template>
