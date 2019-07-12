<template>
  <div class="addressPicker">
    <div class="detailList">
      <div
        class="item"
        :class="{active:type == 'province'}"
        @click="changType('province')"
      >{{provinceName}}</div>
      <div
        class="item"
        :class="{active:type == 'city'}"
        @click="changType('city')"
        v-show="province != ''"
      >{{cityName}}</div>
      <div
        class="item"
        :class="{active:type == 'county'}"
        @click="changType('county')"
        v-show="city != ''"
      >{{countyName}}</div>
      <div
        class="item"
        :class="{active:type == 'town'}"
        @click="changType('town')"
        v-show="county != ''"
      >{{townName}}</div>
    </div>
    <div class="content">
      <div class="content_wrap">
        <div class="contentList" v-show="type == 'province'">
          <span
            :class="{active:item.districtId == province}"
            @click="selectProvince(item)"
            v-for="(item, index) in provinceList"
            :key="index"
          >{{item.name}}</span>
        </div>

        <div class="contentList" v-show="type == 'city'">
          <span
            :class="{active:item.districtId == city}"
            @click="selectCity(item)"
            v-for="(item, index) in cityList"
            :key="index"
          >{{item.name}}</span>
        </div>

        <div class="contentList" v-show="type == 'county'">
          <span
            :class="{active:item.districtId == county}"
            @click="selectCounty(item)"
            v-for="(item, index) in countyList"
            :key="index"
          >{{item.name}}</span>
        </div>

        <div class="contentList" v-show="type == 'town'">
          <span
            :class="{active:item.districtId == town}"
            @click="selectTown(item)"
            v-for="(item, index) in townList"
            :key="index"
          >{{item.name}}</span>
          <span
            :class="{active:town == 0}"
            v-show="townList.length == 0"
            @click="selectTown({districtId:0,name:'全区'})"
          >全区</span>
        </div>
      </div>
    </div>
    <div class="sure" @click="save">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      province: "",
      provinceList: [],
      city: "",
      cityList: [],
      county: "",
      countyList: [],
      town: "",
      townList: [],
      type: "province"
    };
  },
  created() {
    this._initData();
  },
  methods: {
    _initData() {
      //======== 初始化省级
      this.$http.get(this.$api.addressPicker).then(res => {
        console.log(res);
        this.provinceList = res.data.data;
        console.log(this.provinceList);
      });
    },
    close() {
      this.$emit("closed");
    },
    changType(type) {
      //对应显示个等级 区域列表
      this.type = type;
    },
    getDistrictList(parentId, success) {
      //查询对应等级列表
      this.$http
        .post(this.$api.districtList, {
          parentId: parentId
        })
        .then(({ data }) => {
          if (success) success(data);
        });
    },
    selectProvince(Province) {
      //选中省级
      console.log(Province);
      this.province = Province.districtId;
      this.cityList = Province.cityChild;
      console.log(this.cityList);
      if (this.cityList.length) {
        this.type = "city";
      }
      this.city = ""
      this.county = ""
      this.town = ""
    },
    selectCity(City) {
      //选中市级
      console.log(City);
      this.city = City.districtId;
      this.countyList = City.countyChild;
      if (this.countyList.length) {
        this.type = "county";
      }
      this.county = ""
      this.town = ""
    },
    selectCounty(County) {
      //选中区级
      console.log(County);
      this.county = County.districtId;
      this.townList = County.townChild;
      if (this.townList.length) {
        this.type = "town";
      } else {
        this.town = 0;
      }
      this.town = ""
    },
    selectTown(Town) {
      //选中镇级
      console.log(Town);
      this.town = Town.districtId;
    },
    save() {
      //触发自定义事件  将选中结果 传递给 父组件
      this.$emit("saveAddress", this.addressQuery);
    }
  },
  computed: {
    //======>选中个对应 地区 名字显示
    provinceName() {
      let that = this;
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
      return "请选择";
    },
    cityName() {
      let that = this;
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

      return "请选择";
    },
    countyName() {
      let that = this;
      if (this.county != "") {
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
      return "请选择";
    },
    townName() {
      let that = this;
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

      if (this.town == 0 && this.town !== "") {
        return "全区";
      }
      return "请选择";
    },
    //处理选择的结果
    addressQuery() {
      let address = {
        province: this.province.toString(),
        provinceName: this.province != "" ? this.provinceName : "",
        city: this.city.toString(),
        cityName: this.city != "" ? this.cityName : "",
        county: this.county.toString(),
        countyName: this.county != "" ? this.countyName : "",
        town: this.town.toString() || "0",
        townName: this.town != "" ? this.townName : ""
      };

      console.log(address);
      return address;
    }
  }
};
</script>


<style lang="scss" scope>
@import "./../../common/css/global.scss";
.addressPicker {
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #fff;
  border-radius: 4px;
  @include border();
  overflow: hidden;
  box-sizing: border-box;
  .detailList {
    @include heightCenter(40px);
    background-color: #fff;
    .item {
      float: left;
      width: 25%;
      text-align: center;
      cursor: pointer;
    }
    .active {
      position: relative;
      color: red;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -25px;
        width: 50px;
        height: 2px;
        background-color: red;
        border-radius: 1px;
      }
    }
  }
  .content {
    @include fullScreen(40px, 0, 60px, 0);
    overflow-y: auto;
    .content_wrap {
      position: relative;
      .contentList {
        overflow: hidden;
        span {
          float: left;
          margin: 10px 0 10px 19px;
          @include textCenter(110px, 40px);
          background-color: #f5f5f5;
          border-radius: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          &.active {
            background-color: red;
            color: #fff;
          }
        }
      }
    }
  }
  .sure {
    @include transformX(270px, 50%, -50%);
    @include textCenter(110px, 40px);
    background-color: red;
    color: #fff;
    font-size: 16px;
    border-radius: 40px;
    cursor: pointer;
    z-index: 10;
  }
}
</style>

<style>
/*滚动条样式*/
.content::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
