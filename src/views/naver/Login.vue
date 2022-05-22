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
      clientId: 'kdsnop',
      callbackUrl: 'http://localhost:8080/naverlogin',
      isPopup: false, // 
      loginButton: {
        color: 'green', type: 3, height: 60
      }
    })
    this.naverLogin.init()

  }
}
</script>