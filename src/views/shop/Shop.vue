<template>
  <div class="shop" v-if="shopInfo">
    <nav class="header-nav">
      <div class="nav_bg">
        <img :src="shopInfo.rst.scheme" alt />
      </div>

      <div class="nav_back">
        <i class="fa fa-chevron-left" @click="$router.push('/home')" />
      </div>

      <div class="shop_image">
        <img :src="shopInfo.rst.image_path" alt />
      </div>
    </nav>

    <div class="index-rst">
      <div class="rst-name">
        <span @click="showInfoModal = true">{{ shopInfo.rst.name }}</span>
        <i class="fa fa-caret-right" />
      </div>

      <InfoModal
        @close="showInfoModal = false"
        :rst="shopInfo.rst"
        :showInfoModal="showInfoModal"
      />

      <div class="rst-order">
        <span>评分{{ shopInfo.rst.rating }}</span>
        <span>月售{{ shopInfo.rst.recent_order_num }}单</span>
        <span>蜂鸟专送{{ shopInfo.rst.order_lead_time }}分钟</span>
      </div>

      <Activity :activities="shopInfo.rst.activities" />
      <p class="rst-promotion">公告:{{ shopInfo.rst.promotion_info }}</p>
    </div>

    <NavBar />
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
import InfoModal from "../../components/shops/InfoModal";
import Activity from "../../components/shops/Activity.vue";
import NavBar from "../../components/shops/NavBar.vue";
export default {
  name: "Shop",
  data() {
    return {
      shopInfo: null,
      showInfoModal: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/api/profile/batch_shop").then((res) => {
        console.log(res.data);
        this.shopInfo = res.data;
      });
    },
  },
  components: {
    InfoModal,
    Activity,
    NavBar,
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header-nav {
  position: relative;
}
.nav_bg img {
  width: 100%;
  height: 26.666667vw;
}
.nav_back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26.666667vw;
  background: rgba(0, 0, 0, 0.5);
}
.nav_back i {
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1.333333vw;
  margin-top: 1.333333vw;
}
.shop_image {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -10vw;
  margin-top: 11vw;
}
.shop_image img {
  width: 20vw;
  height: 20vw;
  border-radius: 0.8vw;
}

.index-rst {
  padding: 8vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: inset 0 -0.666667vw 0.666667vw hsla;
}
.index-rst .rst-name {
  flex: 1;
  width: 72vw;
  font-size: 1.3rem;
  font-weight: 700;
  white-space: nowrap;
  padding-right: 2.666667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6vw 0;
}
.rst-name span {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}

.index-rst .rst-order {
  white-space: nowrap;
  height: 3.2vw;
  margin-top: 1.733333vw;
  color: #666;
  text-align: center;
  font-size: 0.6rem;
}
.rst-order span {
  margin: 0 3px;
}
.index-rst .rst-promotion {
  width: 80vw;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
</style>