<template>
	<div v-if="isLoggedIn">
		<div class="ui grid container">
			<div v-for="image in allImages" :key="image.id" class="four wide column">
				<div class="ui card">
					<div class="image">
						<img class="ui fluid image" :src="image.link">
					</div>
					<div class="extra content">
						<button @click="deleteImages(image.deletehash)" class="fluid ui button">Delete</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h2>Log in to get started!</h2>
		<a href="" @click="login">Login</a>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: "ImageList",
	computed: mapGetters(['allImages', 'isLoggedIn']),
		methods: mapActions(['fetchImages', 'deleteImages', 'login']),
		created() {
			this.fetchImages()
		}
	}
</script>

<style scoped>
	img {
		max-width: 100%;
		padding: 5px;
	}
</style>