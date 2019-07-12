<template>
  <div class="cascaderContainer">
    <el-row :gutter="24">
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="1">
        <div class="title">四级联动:</div>
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="9" :xl="11">
        <div class="trigger_picker" @click="handlePicker">
          <p>{{actAddressText}}</p>
          <i :class="showPicker ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" class="arrow"></i>
        </div>

        <transition name="el-zoom-in-top">
          <AddressPicker @saveAddress="updateAddress" v-show="showPicker" @closed="close"></AddressPicker>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
      actAddress: null
    };
  },
  methods: {
    handlePicker() {
      this.showPicker = !this.showPicker;
    },
    close() {
      this.showPicker = false;
    },
    updateAddress(address) {
      //picker地址选择器 选择好 之后保存
      this.actAddress = address;
      this.showPicker = false;
    }
  },
  computed: {
    actAddressText() {
      let Address =
        this.actAddress !== null
          ? this.actAddress.provinceName +
            this.actAddress.cityName +
            this.actAddress.countyName +
            this.actAddress.townName
          : "";
      return Address;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../common/css/global.scss";
.cascaderContainer {
  .el-row {
    line-height: 35px;
    .title {
      font-size: 18px;
    }
  }
  .trigger_picker {
    position: relative;
    width: 100%;
    @include heightCenter(35px);
    @include border();
    padding: 0 10% 0 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    .arrow {
      @include transformY(50%, 90%, -50%);
      @include textCenter(10%, 35px);
      z-index: -1;
    }
  }
}
</style>