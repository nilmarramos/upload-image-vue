<template>
  <div>
    <AppHeader/>
    <div class="ui container">
      <router-view/>
    </div>
  </div>
</template>

<script>
	import AppHeader from "./components/AppHeader";
	export default {
		components: {
			AppHeader
		}
	}
</script>
<style>

</style>
