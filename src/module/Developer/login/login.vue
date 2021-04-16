<style scoped lang="scss" src="./login.scss"></style>
<template src="./login.html"></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DeveloperService from "../../../services/developerService";

@Component
export default class Login extends Vue {
  email = "";
  password = "";
  submitted = false;
  $validator: any;
  createPasswordSwitch = 'password';
  profilepic : any;
  switchPasswordType() {
    this.createPasswordSwitch = this.createPasswordSwitch === 'password' ? 'text' : 'password';
  }
  created()
  {
    localStorage.clear();
  }
  login(){
      this.submitted = true;
        this.$validator.validate().then(valid => {
          if (valid) {
            this.submitted = false
            let data = {
              "email":this.email,
              "password":this.password
            };
      DeveloperService.loginDeveloper(data).then(
        data => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
                    localStorage.setItem("bearerToken",data.data.access_token);
                    localStorage.setItem("id",data.data.user.id);
                   // this.profilepic = data.data.user.profile_pic;
                console.log(data.data.access_token);
                    this.$router.push("/developersList");

            } else {
              alert("Could not Login")
            }
          }
          else{
             alert("user not found")

          }
        }
      );
         } });
}
}
</script>