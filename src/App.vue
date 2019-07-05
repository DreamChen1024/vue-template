<template>
  <div id="app">
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <NavMenu :navMenus="totalList"></NavMenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <Breadcrumb></Breadcrumb>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      totalList: [
        {
          id: "0",
          title: "首页",
          path: "/home"
        },
        {
          id: "1",
          title: "表单",
          childs: [
            {
              path: "/form/radio",
              name: "单选框"
            },
             {
              path: "/form/checkBox",
              name: "复选框"
            },
            {
              path: "/form/input",
              name: "输入框"
						},
            {
              path: "/form/cascader",
              name: "级联选择器"
						}
          ]
				},
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
@import "./common/css/global.scss";
#app {
  .el-aside {
    height: 100vh;
    background-color: $theme-color;
    overflow: hidden;
    .el-menu {
      border: none;
    }
  }
  .el-header {
    border-bottom: 1px solid #eee;
    .el-breadcrumb {
      line-height: 4;
    }
    .menu {
      font-size: 30px;
    }
  }
}
</style>
