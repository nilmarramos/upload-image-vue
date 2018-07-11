<template>
  <div id="app">
    <div id="nav">
      <AppHeader/>
    </div>
    <router-view/>
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
