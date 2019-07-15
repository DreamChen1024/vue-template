<template>
  <div class="loadingContainer"></div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
	data() {
		return {}
	},
	created() {
		this.$myLoading.open();
		setTimeout( () => {
			this.$myLoading.hide();
		},3000)
	}
};
</script>