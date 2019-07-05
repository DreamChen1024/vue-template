<template>
  <div class="radio">
    <label v-for="(item, index) in list" :key="index">
      <input :type="item.type" :name="item.name" :id="item.id" :value="item.val" hidden />
      <label :for="item.id" class="label" @click="selected(item)"></label>
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
			list: this.childList
		};
	},
	methods: {
		selected(item) {
			this.$emit('selected', item)
		}
	}
};
</script>


<style lang="scss" scoped>
.radio {
  .label {
    height: 18px;
    width: 18px;
    display: inline-block;
    // background-image: url("https://caiyunupload.b0.upaiyun.com/newweb/imgs/icon-unchecked.png");
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    margin-top: -4px;
    border: 2px solid #ccc;
    border-radius: 50%;
  }
  input[type="radio"]:checked + .label {
    background-image: url("./../../assets/img/active.png");
    background-size: cover;
  }
}
</style>
