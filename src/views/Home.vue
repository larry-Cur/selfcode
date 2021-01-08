<template>
  <div class="home">
    <div class="home_header bgf5f c000 fbold tcenter ft20">
      {{ $route.meta.name }}
    </div>
    <div class="home_main bgf5f">
      <div class="main_container">
        <div
          class="home_card bg000 cfff mt10 flex fcenter fbetween fbold"
          v-for="(item, index) in cardArr"
          :key="index"
          @click="$router.push({ name: item.name })"
        >
          <p class="ft16">{{ item.title }}</p>
          <p class="ft20">></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardArr: [],
    };
  },
  created() {
    console.log(this.$router);
    let routerArr = this.$router.options.routes;
    console.log(routerArr);
    for (let i in routerArr) {
      let cardObj = {};
      cardObj.name = routerArr[i].name;
      cardObj.title = routerArr[i].meta.name;
      this.cardArr.push(cardObj);
    }
    console.log(this.cardArr);
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.home_header {
  height: 60px;
  line-height: 60px;
}
.home_main {
  height: 100%;
  overflow-y: scroll;
  .main_container {
    min-width: 800px;
    margin: 0 auto;
  }
  .home_card {
    padding: 0 20px;
    height: 40px;
  }
}
</style>
