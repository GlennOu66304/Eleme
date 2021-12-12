<template>
  <div class="addAddress">
    <Header :title="title" :isLeft="true" />
    <div class="viewbody">
      <div class="content">
        <FormBlock
          v-model="addressInfo.name"
          label="联系人"
          placeholder="姓名"
          :tags="sexes"
          :sex="addressInfo.sex"
          @checkSex="checkSex"
        />
        <FormBlock
          v-model="addressInfo.phone"
          label="电话"
          placeholder="手机号码"
        />
        <FormBlock
          v-model="addressInfo.address"
          label="地址"
          placeholder="小区/写字楼/学校等"
          icon="angle-right"
          @click="showSearch = true"
        />
        <FormBlock
          v-model="addressInfo.bottom"
          label="门牌号"
          placeholder="10号楼5单元404"
          icon="edit"
          texarea="textarea"
        />
        <div class="formblock">
          <div class="label-wrap">标签</div>
          <TabTags
            :tags="tags"
            @checkTag="checkTag"
            :selectTag="addressInfo.tag"
          />
        </div>
      </div>
      <div class="form-button-wrap">
        <button class="form-button" @click="handleSave">确定</button>
      </div>
    </div>

    <AddressSearch
      :showSearch="showSearch"
      @close="showSearch = false"
      :addressInfo="addressInfo"
    />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import FormBlock from "../../components/orders/FormBlock.vue";
import TabTags from "../../components/orders/TabTags";
import AddressSearch from "../../components/orders/AddressSearch";
import { Toast } from "mint-ui";
export default {
  name: "Addaddress",
  data() {
    return {
      title: "",
      tags: ["家", "公司", "学校", "其他"],
      sexes: ["先生", "女士"],
      addressInfo: {},
      showSearch: false,
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.addressInfo = to.params.addressInfo;
      vm.title = to.params.title;
    });
  },
  methods: {
    checkTag(item) {
      // console.log(item);
      this.addressInfo.tag = item;
    },
    checkSex(item) {
      this.addressInfo.sex = item;
    },
    handleSave() {
      // console.log(this.addressInfo);
      if (!this.addressInfo.name) {
        this.showMsg("请输入联系人");
        return;
      }

      if (!this.addressInfo.phone) {
        this.showMsg("请输入手机号");
        return;
      }

      if (!this.addressInfo.address) {
        this.showMsg("请输入地址");
        return;
      }

      if (!this.addressInfo.bottom) {
        this.showMsg("请输入门牌号");
        return;
      }

      if (this.title == "添加地址") {
        this.addAddress();
      } else {
        this.editAddress();
      }
    },
    showMsg(msg) {
      Toast({
        message: msg,
        position: "bottom",
        duration: 2000,
      });
    },

    addAddress() {
      this.$axios
        .post(
          `/api/user/add_address/${localStorage.ele_login}`,
          this.addressInfo
        )
        .then((res) => {
          if (!this.$store.getters.userInfo) {
            this.$store.dispatch("setUserInfo", this.addressInfo);
          }
          this.$router.push("/myAddress");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editAddress() {
      this.$axios
        .post(
          `/api/user/edit_address/${localStorage.ele_login}/${this.addressInfo._id}`,
          this.addressInfo
        )
        .then((res) => {
          this.$router.push("/myAddress");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Header,
    FormBlock,
    TabTags,
    AddressSearch,
  },
};
</script>

<style scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}
.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: 4vw;
  background: #fff;
  font-size: 0.94rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}
.formblock .label-wrap {
  flex-basis: 17.333333vw;
  padding: 3.733333vw 0;
  line-height: 4.8vw;
  color: #333;
  font-weight: 700;
}

/* 确定按钮 */
.form-button-wrap {
  padding: 5.333333vw 4vw;
  display: flex;
}
.form-button-wrap .form-button {
  background: #00d762;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: 1.1rem;
  line-height: 5.066667vw;
  color: #fff;
  padding: 3.333333vw 0;
  border: none;
  font-weight: 500;
}
</style>
