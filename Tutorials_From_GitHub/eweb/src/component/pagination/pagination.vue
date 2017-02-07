<template>
      <div :class="pageCss.paginationBox">
              <div :class="pageCss.pageCenter">
                    <span :class='indexBtn' @click="clickPage(1)">首页</span>
                    <span :class='prevBtn'  @click="clickPage(curpage-1)">上一页</span>
                    <span :class='pageCss.pageIndex'>
                          <span v-for="one in pageArry"  @click="clickPage(one)" :class="one == curpage?pageCss.active:''">{{one}}</span>
                    </span>
                    <span :class='nextBtn'  @click="clickPage(curpage+1)">下一页</span>
                    <span :class='lastBtn'  @click="clickPage(getPages())">尾页</span>
              </div>
              <div :class="pageCss.gotoBox">
                    跳转至
                    <input type="text" name="name"  v-model="targetpage  | intonly"/>
                    <button type="button" name="button" :class='gotoBtn'  @click="clickPage(targetpage)">确定</button>
              </div>
      </div>
</template>

<script>
import pageCss from "./paginate.css";
export default {
  props:{
    curpage: {
      // type: Number,
      default: 1
    },

    size:{
      type: Number,
      default: 20
    },

    totals:{
      type: Number,
      default: 0
    },

    pix:{
      type: Number,
      default: 5
    },
    events:{
      type: Object,
      default: function(){
        return {
          pageChange: function(newpage) {

          }
        }
      }
    }
  },
  data: function () {
    return {
      pageCss,
      indexBtn:pageCss.defTheme,
      prevBtn:pageCss.defTheme,
      nextBtn:pageCss.defTheme,
      lastBtn:pageCss.defTheme,
      gotoBtn:pageCss.defTheme,
      targetpage:""
    }
  },
  created: function(){
      this.validateBtn();
  },
  computed: {
      pageArry() {
          let ay = [];
          this.curpage = isNaN(this.curpage*1)? 1: this.curpage*1;
          //
          for(var i = this.pix; i >0; i--) {
              if(this.curpage - i <= 0) continue;
              ay.push(this.curpage - i);
          }

          ay.push(this.curpage);
          for(var i = 1; i <= this.pix; i++) {
              if(this.curpage + i > this.getPages()) break;
              ay.push(this.curpage + i);
          }
          return ay
      }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    getPages(){
      return Math.ceil(this.totals/this.size)
    },

    validateBtn() {
      this.indexBtn = this.prevBtn = this.lastBtn = this.nextBtn = this.pageCss.defTheme;
      if(this.curpage == 1) {this.indexBtn = this.prevBtn = this.pageCss.closeBtn;return false}
      if(this.curpage == this.getPages()) {this.lastBtn = this.nextBtn = this.pageCss.closeBtn; return false}
    },

    clickPage(page) {
        if(!page || isNaN(page*1) || page < 1 || page > this.getPages()) return false;
        this.curpage = page*1;
    }
  },
  watch:{
    "curpage": function(){
        // 发射页面变更事件
        // this.$dispatch("pageChange", {page: this.curpage});
        this.events.pageChange.call(this._context, this.curpage);
        // 验证操作按钮的点击
        this.validateBtn();
    }
  },
  components: {}
}
</script>
