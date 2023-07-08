<script>
export default {
    data: () => ({
        counter: 0,
    })
}
</script>

<template>
    <main>
        <h1>Count</h1>
        <p>{{ counter }}</p>
        <div>
            <button @click="counter++">Increment</button>
        </div>
    </main>
</template>
