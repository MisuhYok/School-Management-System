<template>
  <div id="landing-background">
    <div class="landing-body float-none" >
      <div id="landing-teacher">
        <div @click="teacherHover" class="landing-teacher-container" v-if="isTeacherHover">
          <v-img src="../assets/teacher.svg" class="landing-image" />
          <div class="landing-login-as">LOGIN AS TEACHER</div>
        </div>
        <v-form class="landing-login-form" v-else>
          <v-text-field
            style="width: 50%"
            color="#769fcd"
            outlined
            v-model="email"
            prepend-inner-icon="mdi-account"
            label="Email"
          />
          <v-text-field
            style="width: 50%"
            color="#769fcd"
            outlined
            v-model="password"
            prepend-inner-icon="mdi-lock"
            label="Password"
            :type="'password'"
            required
          />
          <small style="color: red; font-weight: bold;" v-show="errorLogin">{{errorLogin}}</small>
          <v-btn v-if="!isLoading" style="width: 50%; height: 3rem; font-weight: bolder; background: linear-gradient(315deg, rgba(214,230,242,1) 0%, rgba(247,251,252,1) 100%);" @click="login">Login as Teacher</v-btn>
          <v-btn disabled v-else style="width: 50%; height: 3rem; font-weight: bolder; background: rgba(0,0,0,0)" @click="login">
            <v-progress-circular
              :size="25"
              indeterminate
              color="#769fcd"
            />
          </v-btn>
          <v-img style="margin-top: 2rem" src="../assets/teacher.svg" height="35%" width="35%" />
        </v-form>
      </div>
      <div id="landing-parent">
        <div @click="parentHover" class="landing-parent-container" v-if="isParentHover">
          <v-img src="../assets/parent.svg" class="landing-image"/>
          <div class="landing-login-as">LOGIN AS PARENT</div>
        </div>
        <v-form class="landing-login-form" v-else>
          <v-text-field
            style="width: 50%"
            color="#769fcd"
            outlined
            v-model="email"
            prepend-inner-icon="mdi-account"
            label="Email"
            required
          />
          <v-text-field
            style="width: 50%"
            color="#769fcd"
            outlined
            v-model="password"
            prepend-inner-icon="mdi-lock"
            label="Password"
            :type="'password'"
            required
          />
          <v-btn style="width: 50%; font-weight: bolder; background: linear-gradient(315deg, rgba(214,230,242,1) 0%, rgba(247,251,252,1) 100%);" @click="login">Login as Parent</v-btn>
          <v-img style="margin-top: 2rem" src="../assets/parent.svg" height="36%" width="36%" />
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      isTeacherHover: true,
      isParentHover: true,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations({
      setErrorLogin: 'SET_ERROR_LOGIN'
    }),
    teacherHover () {
      if (this.isParentHover !== this.isTeacherHover) {
        this.isParentHover = !this.isParentHover
        this.resetForm()
      }
      this.isTeacherHover = !this.isTeacherHover
    },
    parentHover () {
      if (this.isTeacherHover !== this.isParentHover) {
        this.isTeacherHover = !this.isTeacherHover
        this.resetForm()
      }
      this.isParentHover = !this.isParentHover
    },
    resetForm () {
      this.email = ''
      this.password = ''
    },
    login () {
      console.log(this.email)
      console.log(this.password)
      this.$store.commit('SET_ISLOADING', true)
      this.setErrorLogin('test')

      setTimeout(() => {
        this.$store.commit('SET_ISLOADING', false)
        this.setErrorLogin(null)
      }, 5000)
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      errorLogin: state => state.errorLogin
    })
  }
}
</script>

<style scoped>

.landing-body {
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
}

#landing-parent, #landing-teacher {
  width: 50%;
  height: 75vh;
  padding: 15px;
}

#landing-parent, #landing-teacher h1 {
  text-align: center;
}

.landing-login-form {
  background-color: white;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #b9d7ea;
  padding-top: 5%;
  padding-bottom: 5%;
  border-radius: 15px;
}

.landing-teacher-container, .landing-parent-container {
  cursor: pointer;
  position: relative;
  text-align: center;
}

.landing-login-as {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  border-radius: 15px;
  font-weight: bolder;
}

.landing-image {
  max-height: 32rem;
  height: 32rem;
}

</style>
