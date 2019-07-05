<template>
  <div class="radioContainer">
    <p>您喜欢什么运动?</p>
    <Radio :childList="radioList" @selected="selected"></Radio>
  </div>
</template>

<script>
export default {
	data() {
		return {
			radioList: [
				{
					type: "radio",
					name: "motion",
					id: "basketball",
					val: "1",
					text: "篮球"
				},
				{
					type: "radio",
					name: "motion",
					id: "ball",
					val: "2",
					text: "足球"
				},
				{
					type: "radio",
					name: "motion",
					id: "pingpong",
					val: "3",
					text: "乒乓球"
				}
			]
		}
	},
	methods: {
		selected(val) {
			console.log(val)
		}
	}
}
</script>


<style lang="scss" scoped>
.radioContainer {
	font-size: 20px;
	p {
		line-height: 20px;
		margin-bottom: 10px;
	}
}
</style>
