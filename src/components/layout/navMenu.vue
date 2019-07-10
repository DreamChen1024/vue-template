<template>
  <div class="navMenu">
    <label v-for="(item) in navMenus" :key="item.id">
        <el-menu-item v-if="item.childs==null" :index="item.path">
          <i class="el-icon-date"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>

        <el-submenu v-if="item.childs" :index="item.path">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child, index) in item.childs"
              :key="index"
              :index="child.path"
            >{{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  }
};
</script>
