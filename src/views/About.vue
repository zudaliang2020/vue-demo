<template>
	<div class="about">
		<h1>Vue3.0测试</h1>
		<div>count:{{ count }}</div>
		<div>count * 2:{{ doubleCount }}</div>
		<button @click="add">add count</button>
		<hr />
		<button @click="getRouter">获取路由</button>
		<div>inputText:{{ inputText }}</div>
		<div>vuexText:{{ text }}</div>
		<input type="text" v-model="inputText" />
		<button @click="setText">setText</button>
	</div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from 'vue';

export default {
	setup() {
		//定义状态
		const count = ref(0);
		//定义方法
		const add = () => {
			count.value++;
		};
		//计算属性
		//计算属性 computed 是一个方法，里面需要包含一个回调函数，当我们访问计算属性返回结果时，会自动获取回调函数的值：
		const doubleCount = computed(() => count.value * 2);
		//监听器
		//监听器 watch 同样是一个方法，它包含 2 个参数，2 个参数都是 function：
		//第一个参数是监听的值，count.value 表示当 count.value 发生变化就会触发监听器的回调函数，即第二个参数，第二个参数可以执行监听时候的回调
		watch(
			() => count.value,
			val => {
				console.log(`count is ${val}`);
			}
		);
		//获取路由
		//Vue 3.0 中通过 getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，
		//ctx.$router 是 Vue Router 实例，里面包含了 currentRoute 可以获取到当前的路由信息
		const { ctx } = getCurrentInstance();
		const getRouter = () => {
			console.log(ctx.$router.currentRoute.value);
		};
		//输入框
		const inputText = ref('');
		//引用Vuex
		const text = computed(() => ctx.$store.state.text);
		const setText = () => {
			ctx.$store.commit('setText', inputText.value);
		};
		return {
			count,
			add,
			doubleCount,
			getRouter,
			text,
			inputText,
			setText
		};
	}
};
</script>

<style scoped lang="less">
.about {
	color: red;
}
</style>
