<template>
  <div class="checkBox">
    <label v-for="(item, index) in list" :key="index">
      <input :type="item.type" :id="item.id" :value="item.val" hidden />
      <label :for="item.id" class="label" @click="selected(item.id)"></label>
      <span class="radio-name">{{item.text}}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    childList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      list: this.childList,
      checked: []
    };
  },
  methods: {
    selected(id) {
      let index = this.checked.indexOf(id);
      if (!this.checked.length || index == -1) {
        this.checked.push(id);
      } else if (this.checked.length && index > -1) {
        this.checked.splice(index, 1);
      }
      this.$emit("selected", this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 18px;
$height: 18px;
$border-color: #ccc;
$background-img-active: url("./../../assets/img/active.png"); //已选中

.checkBox {
  .label {
    width: $width;
    height: $height;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    margin-top: -4px;
    border: 2px solid $border-color;
    border-radius: 50%;
  }
  input[type="checkbox"]:checked + .label {
    background-image: $background-img-active;
    background-size: cover;
  }
}
</style>