<template>
  <div class="addressPicker">
    <div class="selectAddress">
      <div class="selectText" @click="handlePicker">
        <p>
          <span class="province">{{provinceName}}</span>
          <span class="city">{{cityName}}</span>
          <span class="county">{{countyName}}</span>
          <span class="town">{{townName}}</span>
        </p>
      </div>
      <i :class="showPicker ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" class="arrow"></i>
    </div>
    <transition name="el-zoom-in-top">
      <div class="picker" v-show="showPicker">
        <div class="pickerList" v-show="type == 'province'">
          <div
            :class="{active: item.districtId == province}"
            @click="selectProvince(item)"
            class="item"
            v-for="(item) in provinceList"
            :key="item.id"
          >{{item.name}}</div>
        </div>
				<div class="pickerList" v-show="type == 'city'">
          <div
            :class="{active: item.districtId == city}"
            @click="selectCity(item)"
            class="item"
            v-for="(item) in cityList"
            :key="item.id"
          >{{item.name}}</div>
        </div>
				<div class="pickerList" v-show="type == 'county'">
          <div
            :class="{active: item.districtId == county}"
            @click="selectCounty(item)"
            class="item"
            v-for="(item) in countyList"
            :key="item.id"
          >{{item.name}}</div>
        </div>
				<div class="pickerList" v-show="type == 'town'">
          <div
            :class="{active: item.districtId == town}"
            @click="selectTown(item)"
            class="item"
            v-for="(item) in townList"
            :key="item.id"
          >{{item.name}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
      provinceList: [],
			province: "", //省
			cityList: [],
			city: "", //市
			countyList: [],
			county: "", //区
			townList: [],
			town: "" ,//镇
			type: "province"
    };
  },
  methods: {
    handlePicker() {
			this.showPicker = !this.showPicker;
			this.$http("http://localhost:8080/static/addressPicker.json").then((res) => {
				console.log(res.data)
				this.provinceList = res.data.data;
			})
    },
    selectProvince(item) {
			let that = this;
			//选中省级
			
			this.province = item.districtId;
			this.cityList = item.cityChild;
			if(this.cityList.length) {
				that.type = "city"
			}
		},
		selectCity(item) {
			let that = this;
			this.city = item.districtId;
			this.countyList = item.countyChild;
			if(this.countyList.length) {
				that.type = "county"
				console.log(2)
			}
		},
		selectCounty(item) {
			let that = this;
			this.county = item.districtId;
			this.townList = item.townChild;
			if(this.townList.length) {
				that.type = "town"
			}
		},
		selectTown(item) {
			this.town = item.districtId;
			this.showPicker = false;
		}
  },
  computed: {
    provinceName() {
      if (this.province != "") {
        let name = "";
        if (this.province != "" && this.provinceList.length > 0) {
          for (let i = 0; i < this.provinceList.length; i++) {
            if (this.province == this.provinceList[i].districtId) {
              name = this.provinceList[i].name;
              break;
            }
          }
          return name;
        }
      }
      return "请选择!";
		},
		cityName() {
      if (this.city != "") {
        let name = "";
        if (this.city != "" && this.cityList.length > 0) {
          for (let i = 0; i < this.cityList.length; i++) {
            if (this.city == this.cityList[i].districtId) {
              name = this.cityList[i].name;
              break;
            }
          }
          return name;
        }
      }
		},
		countyName() {
      if (this.county != "") {
        let name = "";
        if (this.county != "" && this.countyList.length > 0) {
          for (let i = 0; i < this.countyList.length; i++) {
            if (this.county == this.countyList[i].districtId) {
              name = this.countyList[i].name;
              break;
            }
          }
          return name;
        }
      }
		},
		townName() {
      if (this.town != "") {
        let name = "";
        if (this.town != "" && this.townList.length > 0) {
          for (let i = 0; i < this.townList.length; i++) {
            if (this.town == this.townList[i].districtId) {
              name = this.townList[i].name;
              break;
            }
          }
          return name;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../common/css/global.scss";
.addressPicker {
  .selectAddress {
    position: relative;
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 5px;
    .selectText {
      width: 100%;
      @include heightCenter(35px);
      padding: 0 10% 0 10px;
			box-sizing: border-box;
			span {
				padding: 10px;
			}
    }
    .arrow {
      @include transformY(50%, 90%, -50%);
      @include textCenter(10%, 35px);
    }
  }
  .picker {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    .pickerList {
      overflow: hidden;
      .item {
        @include textCenter(25%, 40px);
        float: left;
        &.active {
          background: $picker-color;
          color: white;
        }
      }
    }
  }
}
</style>

