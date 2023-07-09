<script>
import CounterButton from './components/CounterButton.vue';
import Statistics from './components/Statistics.vue';
export default {
  components: {
    CounterButton,
    Statistics,
  },
  data() {
    return {
      message: 'Counter example',
      characters: [
        { name: 'Luke Skywalker', fav: false, sex: 'male', },
        { name: 'Darth Vader', fav: false, sex: 'male', },
        { name: 'Han Solo', fav: false, sex: 'male', },
        { name: 'Leia Organa', fav: false, sex: 'female', },
      ]
    };
  },
  methods: {
    addCharacter(event) {
      event.preventDefault();
      const { name, sex } = event.target.form;
      if (!name.value || !sex.value) {
        return;
      }
      this.characters.push({
        name: name.value,
        sex: sex.value,
      });
    },
    changeMessage() {
      this.message = 'Counter updated';
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
    <h2>Favorite Characters</h2>
    <ul v-for="(character, index) in characters" :key="`fav-${index}`">
      <li v-if="character.fav">Favorite: {{ character.name }}</li>
    </ul>
    <h2>Add a character</h2>
    <form>
      <label for="name">Name: </label>
      <input id="name" type="text" required/>
      <label for="sex">Sex: </label>
      <input id="sex" type="text"  required/>
      <button type="submit" @click="addCharacter">Submit</button>
    </form>
    <hr>
    <Statistics :characters="characters"/>
    <hr>
    <h2>{{ message }}</h2>
    <CounterButton @increment="changeMessage"/>
  </main>
</template>
