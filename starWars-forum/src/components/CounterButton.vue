<script>
export default {
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
            <button @click="updateCount">Increment</button>
        </div>
    </main>
</template>
