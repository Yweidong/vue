<template>
  <div class="roof-baf-far">
    <div class="roof-bar">
      <div class="roof-inner">
        <el-input placeholder="请输入关键词搜索" class="search">
          <el-button slot="append" icon="el-icon-search" type="success"></el-button>
        </el-input>

          <div class="" @click="toHelp">

            <div class="gouwuchean">
              <img class= "xiaoche" src="@/assets/images/homecart.png" alt="">
               <span style="margin-left: 15px;">我的购物车</span>
              <div class="jiahao">{{gw}}</div>
            </div>
<!--            <div class="didididi">0</div>-->
          </div>

      </div>
      <div class="roof-guide">
        <!-- <div class="guide-title" @click="guideHome">资源导航</div> -->
        <!-- <div class="guide-type" @click="switchTab(i)" v-for="(i, ind) of types" :key="ind">{{i.label}}</div> -->
        <!-- <el-tabs v-model="tabType" @tab-click="switchTab">
          <el-tab-pane v-for="(i, ind) of types" :key="ind" :label="i.label" ></el-tab-pane>
        </el-tabs> -->
        <el-menu :default-active="columnId" class="el-menu-demo" mode="horizontal" @select="switchTab">
          <el-menu-item :index="i.column_id" v-for="i of columns" :key="i.column_id" :disabled="i.use_flag === '0'">{{i.column_name}}</el-menu-item>
        </el-menu>
      </div>
      <!-- <HomeRoofGuide /> -->
    </div>
  </div>
</template>

<script>

// import { getColumns } from '@/api/home'
export default {
  components: {
    // HomeRoofBarTab,
    // HomeRoofGuide

  },
  data () {
    return {
      gw: 0,
      tabType: 9,
      columns: [],
      columnId: ''
    }
  },
  computed: {

  },
  methods: {
    switchTab: function (e) {
      console.log(e)
      this.columnId = e
      // if() {

      // }
      this.$router.push({ name: 'docs' })
    },
    guideHome: function () {
      this.$router.push('/')
    },
    toHelp: function () {
      this.$router.push('/chat/help')
    },
    toCenter: function () {
      this.$router.push('/chat/help')
    }
  }
}
</script>

<style lang="scss" scoped>
  .jiahao{
    position: relative;
    width: 15px;
    height: 15px;
    top: 0px;
    left: -90px;
    background: red;
    color: white;
    text-align: center;
    line-height: 15px;
    border-radius: 50%;
    font-size: 13px;
  }
  .gouwuchean{
    width: 130px;
    height: 34px;
    background-color: #fff;
    text-align: center;
    line-height: 34px;
    border: 1px solid #eee;
    color: #e1251b;
    font-size: 14px;
    display: flex;
    margin-top: 35px;
    margin-left: 20px;
  }
  .gouwuchean:hover{
    border: 1px solid #C81623;
    color: #C81623;
  }
  .xiaoche {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-left: 10px;
  }
  .didididi{
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    color: white;
    line-height: 20px;
    text-align: center;
  }
  .roof-baf-far {
    background: #fff;
  }
  >>> .el-tabs__nav-wrap::after {
    height: 0px;
  }
  .roof-bar {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    .roof-guide {
      // height: 40px;
      // display: flex;

      >>> .el-menu-item {
        font-size: 16px;
        color: #333;
      }

      .guide-title {
        line-height: 40px;
        height: 40px;
        background: #2bbb61;
        text-align: center;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        width: 200px;
        cursor: pointer;
      }

      .guide-type {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        position: relative;
        cursor: pointer;
        margin-left: 35px;
      }
    }
    .roof-inner {
      display: flex;
      height: 200px;
      width: 200px;

      .search {
        width: 450px;
        margin-top: 32px;
        border: 1px solid #2bbb61;
        border-radius: 4px;
        button {
          background: #2bbb61;
          color: #fff;
          border-radius: 0;
        }
        .el-input__inner {
          border: 0px;
        }
      }
    }

    .cup-logo {
      width: 345px;
      position: relative;

      .site-logo {
        display: block;
        width: 210px;
        margin-top: 24px;

        img {
          width: 190px;
        }
      }
    }
  }
  .query {
    width: 200px;
    float: left;
    margin-top: 15px;
  }
  .roof-bar .navigation li span {
    display: block;
    padding: 0 12px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
</style>
