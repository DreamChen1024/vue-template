<template>
  <div class="breadCrumb">
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index)  in levelList"
        :key="index"
        :to="item.path"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levelList: null //路由集合
    };
  },
  methods: {
    /**
     * 生成面包屑的方法
     */
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      console.log(matched);
      const first = matched[0];
      if (first && first.name !== "home") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
        this.levelList = matched;
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  }
};
</script>