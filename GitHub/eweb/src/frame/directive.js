export default class directive {
  init(Vue) {

    Vue.directive('params', {
            deep: true,
            update: function (obj) {
                  console.log(obj);
                  console.log(this);
            }
      })


  }
}
