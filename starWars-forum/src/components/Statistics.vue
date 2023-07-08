<script>
export default {
    props: {
        characters: {
            type: Array,
            required: true,
        }
    },
    computed: {
        genderCount() {
            return this.characters.filter(character => character.sex === 'male').length;
        }
    },
}
</script>

<template>
    <p>How many male characters are there? {{ genderCount }}</p>
</template>
