<!-- <template>
    <div>
        <div id="google-signin-btn"></div>
    </div>
</template>
<script>
export default {
  mounted () {
    // window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn})
	window.gapi.load('client:auth2', () => {
		window.gapi.client.init({
			clientId: '1031320944798-ag9d52lnklg0eucemgaemjtdnpt9cg80.apps.googleusercontent.com',
			plugin_name: 'VueClient'
		})
	})
	console.log('CHheck Mounted ?? ')
  },
  methods: {
    onSignIn (googleUser) {
	  console.log('Check Here -> ')
      const profile = googleUser.getBasicProfile()
      console.log(profile)

      console.log("ID -> " + profile.getId())
      console.log("Full Name -> " + profile.getName())
      console.log("Given Name -> " + profile.getGivenName())
      console.log("Family Name -> " + profile.getFamilyName())
      console.log("Image URL -> " + profile.getImageUrl())
      console.log("Email -> " + profile.getEmail())

      const id_token = googleUser.getAuthResponse().id_token
      console.log("ID Token -> " + id_token)
    }
  }
}
</script> -->
<template>
	<g-signin-button
		:params="googleSignInParams"
		@success="onSignInSuccess"
		@error="onSignInError">
		Sign in with Google
	</g-signin-button>
</template>
<script>
export default {
	data() {
		return {
			googleSignInParams: {
				clientId: '1031320944798-ag9d52lnklg0eucemgaemjtdnpt9cg80.apps.googleusercontent.com'
			}
		}
	},
	methods: {
		onSignInSuccess (googleUser) {
			const profile = googleUser.getBasicProfile()
			console.log(profile)

			console.log("ID -> " + profile.getId())
			console.log("Full Name -> " + profile.getName())
			console.log("Given Name -> " + profile.getGivenName())
			console.log("Family Name -> " + profile.getFamilyName())
			console.log("Image URL -> " + profile.getImageUrl())
			console.log("Email -> " + profile.getEmail())

			const id_token = googleUser.getAuthResponse().id_token
			console.log("ID Token -> " + id_token)
		},
		onSignInError (error) {
			console.log('OH NOES', error)
		}
	}
}
</script>
