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
$width: 18px;
$height: 18px;
$border-color: #ccc;
$background-img-active: url('./../../assets/img/active.png'); //已选中 

.radio {
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
  input[type="radio"]:checked + .label {
    background-image: $background-img-active;
    background-size: cover;
  }
}
</style>
