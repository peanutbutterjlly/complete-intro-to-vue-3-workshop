<template>
    <button>
				<slot></slot>
		</button>
</template>

<style lang="css" scoped>
    button {
			color: #333;
			border: 1px solid #ccc;
			background-color: #f4f4f4;
			border-radius: 1rem;
			padding: .4rem .8rem;
			margin: .5rem;
		}
		button:hover, button:focus {
			cursor: pointer;
		}
</style>
