<template>
  <div class="checkBoxContainer">
    <p>您喜欢NBA哪位球星?</p>
    <CheckBox @selected="selected" :childList="checkBoxList"></CheckBox>
  </div>
</template>

<script>
export default {
	data() {
		return {
			checkBoxList: [
				{
					type: "checkbox",
					id: "kobe",
					val: "1",
					text: "科比"
				},
				{
					type: "checkbox",
					id: "james",
					val: "2",
					text: "詹姆斯"
				},
				{
					type: "checkbox",
					id: "jordan",
					val: "3",
					text: "乔丹"
				},
				{
					type: "checkbox",
					id: "kyrie",
					val: "4",
					text: "欧文"
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
.checkBoxContainer {
	font-size: 20px;
	margin-top: 100px;
	text-align: center;
	p {
		line-height: 20px;
		margin-bottom: 10px;
	}
}
</style>