<style scoped lang="scss" src="./forgetpassword.scss"></style>
<template src="./forgetpassword.html"></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DeveloperService from "../../../services/developerService";

@Component
export default class ForgetPassword extends Vue {
  email = "";
  password = "";
  confirmpassword = "";
  submitted = false;
  $validator: any;
  activeStatus = false;
  createPasswordSwitch = "password";
  createConfPasswordSwitch = "confirmpassword";
  switchPasswordType() {
    this.createPasswordSwitch = this.createPasswordSwitch === "password" ? "text" : "password";
  }

  changePassword(){
      this.submitted = true;
        if(this.password != this.confirmpassword)
        {
          alert("Password not matched");

        }
        else{
        this.$validator.validate().then(valid => {
          if (valid) {
            this.submitted = false
            let data = {
              "email":this.email,
              "password":this.password,
              "confirm_password":this.confirmpassword
            };
      DeveloperService.changePassword(data).then(
        data => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
              alert("Password Changed Successfully");
            } else {
              alert("Password not Changed")
            }
          }
        }
      );
         } });
        }
}
}
</script>