<template>
	<div class="content">
		<label>vuex使用实战</label>
		<div class="flex-display">
			<label>count: {{ count }}</label>
			<button @click="add">加法</button>
		</div>
	</div>
</template>
<script>
// import store from '../../store';
// import { useStore } from 'vuex';
// const store = useStore();

export default {
	computed: {
		count() {
			return this.$store.state.count;
		}
	},
	methods: {
		add() {
			this.$store.commit("increment")
		}
	}
}
</script>
<style scoped>
.content {
	font-size: 24px;
}
.flex-display {
	display: flex;
	justify-content: flex-start;
}
.flex-display label {
	margin: 10px;
}
.flex-display button {
	font-size: 24px;
	height: 50pxpx;
	width: 90px;
	color: black;
	font-family: pingfangsc;
	background: #9dead7;
}
</style>