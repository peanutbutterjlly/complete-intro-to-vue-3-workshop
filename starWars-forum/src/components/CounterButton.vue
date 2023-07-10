<script>
import GenericButton from './GenericButton.vue';
export default {
    components: {
        GenericButton,
    },
    data: () => ({
        counter: 0,
    }),
    emits: ['increment'],
    methods: {
        updateCount() {
            this.$emit('increment');
            this.counter++;
        }
    }
}
</script>

<template>
    <main>
        <p>{{ counter }}</p>
        <div>
            <GenericButton @click="updateCount">Increment</GenericButton>
        </div>
    </main>
</template>
