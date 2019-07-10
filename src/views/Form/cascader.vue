<template>
  <div class="cascaderContainer">
    <el-row :gutter="24">
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="1">
        <div class="title">四级联动:</div>
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="9" :xl="11">
        <div>
          <AddressPicker></AddressPicker>    
        </div>    
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.cascaderContainer {
  .el-row {
    line-height: 35px;
    .title {
      font-size: 18px;
    }
  }
}
</style>