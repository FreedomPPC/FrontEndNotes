<template>
	<div class="home">
	  <p>I am Home Component</p>
	  <button v-link="{path:'/home/news'}">News</button>
    <button v-link="{path:'/home/messages'}">Messages</button>

    <router-view></router-view>

	</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
	.home{
		margin-left: 3rem;
		margin-top: 3rem;
		p{
			color: blue;
			font-size: 30px;
		}
		button{
			padding: 5px;
			background-color: #ccc;
			outline: none;
			border: none;
			font-size: 30px;
      margin-top: 1rem;
      border-radius: 2px;
		}
	}
</style>
