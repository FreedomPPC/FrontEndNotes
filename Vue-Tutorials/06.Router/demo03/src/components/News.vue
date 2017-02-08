<template>
	<!--<ul>
		<li v-for="news in newsList">
			<a v-link="{ name: 'detail' , params: {id: news.id } }">{{ news.title }}</a>
		</li>
	</ul>
	<div>
		<router-view></router-view>
	</div>-->
	<ul>
		<li v-for="news in newsList">{{news.title}}</li>
	</ul>
</template>

<script>
	
	export default{
		data: function(){
			return {
//				newsList: [
//					{ id: '01', title: 'News 01'},
//					{ id: '02', title: 'News 02'},
//					{ id: '03', title: 'News 03'}
//				]
				
				newsList: [
					{  title: 'News 01'},
					{  title: 'News 02'},
					{  title: 'News 03'},
					{  title: 'News 04'}
				]
			}
		}
	}
	
</script>