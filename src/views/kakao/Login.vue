<template>
  <div >
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
    </a>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      code: ""
    }
  },
  // name: 'KakaoLogin',
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account
          const nickName = kakao_account.profile.profile_nickname
          const profileImage = kakao_account.profile.profile_image
          const email = kakao_account.account_email
          console.log('Get kakao_account -> ', kakao_account)
          console.log('nickName -> ', nickName)
          console.log('profileImage -> ', profileImage)
          console.log('email -> ', email)

          alert('Login Success~!!')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  }
}
</script>
