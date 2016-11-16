<style lang="less">
	// 测试一波less 6666666666
	@base: #f938ab;
	@base1: #c938ab;

	body{
		background:rgb(253,246,227);
	}
	h3{
		color:@base;
	}
	h1{
		color: @base1;
	}


</style>
<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
    <h1>DoubleCount is {{doubleValue}}</h1>
  </div>
</template>

<script>
import { getCount,getDouble} from '../store/getters'
export default {
vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      // 第一种写法,import进getter,然后调用函数
      // counterValue: getCount
      // 第二种写法,因为在根组件导入了store;所以子组件也识别;
      counterValue: state => state.count,
      doubleValue: getDouble
    }
}

}
</script>
