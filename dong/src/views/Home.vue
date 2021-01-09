<template>
  <div class="home">
    <!--顶部导航栏-->
    <TopMenu/>
    <!--中间搜索框-->
    <div class="homemid1">
      <HomeMidOne/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/topMenu/TopCantainer'
import HomeMidOne from '@/components/midOne/midOnebar'
export default {
  name: 'Home',
  components: {
    TopMenu,
    // eslint-disable-next-line vue/no-unused-components
    HomeMidOne
  }
}
</script>

<style>
  .homemid1 {
    height: 140px;
  }

</style>
