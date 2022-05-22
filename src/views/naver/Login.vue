<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">LogOut</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'KVguiVSgOk_3PnuLSp0C',
      callbackUrl: 'http://localhost:8080/naverLogin',
      isPopup: false, // 
      loginButton: {
        color: 'green', type: 3, height: 60
      }
    })

    console.log(this.naverLogin)
   
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      console.log('Check First -> ', this.naverLogin)
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        // Check in the `callback` status point if there must be have to get required information
        var email = this.naverLogin.user.getEmail()
        if (email === undefined || email == null) {
          alert('Email is an required information. Please Agree to provide information')
          // Move to Naver Agree Page to re-agree on using user information
          this.naverLogin.prompt()
          return
        } else {
          console.log('Failed on Callback Processing')
        }
      }
    })
  },

  methods: {
    logout () {
      const accessToken = this.naverLogin.accessToken.accessToken
      console.log('Check Token -> ', accessToken)
      const url = '/oauth2.0/token?grant_type=delete&client_id=KVguiVSgOk_3PnuLSp0C&client_secret=txmmrZF5wl&access_token=${accessToken}&service_provider=NAVER'

      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>