<template>
    <article>
      <Mainblock />
    </article>
</template>

<script>
import Mainblock from '../components/MainBlock.vue'

export default {
  name: 'Home',
  components: {
    Mainblock
  }
}
</script>
<style lang="scss">

.main {
	background-color: #E5E5E5;
	min-height: 100vh;
	width:100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	article {
		width: 100%;
		margin-left: 300px;
		.content {
			min-height: 100vh;
			max-width: 880px;
			width: 100%;
			margin: 0 auto;
			padding: 15px 0;
			section {
				margin-top: 15px;
				margin-bottom: 15px;
			}
		}
	}
}

</style>