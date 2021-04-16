<style lang="scss" src="./header.scss"></style>
<template src="./header.html"></template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DeveloperService from "../../services/developerService";

@Component
export default class Header extends Vue {
  @Prop({ default: [] })
  routePath: string;
  menuItem = [];
  homeMenu = [];
  token : any = "";
  developerid: any;
  submitted: boolean;
  profilepic: any;
  created() {
      this.token =  localStorage.getItem("bearerToken");
      this.developerid = localStorage.getItem("id");

  if(this.token != null && this.token != undefined && this.token != "")
  {
    this.homeMenu = [
      {
        label: "Home",
        to: "/developersList",
      },
      {
        label: "Logout",
        command: (event) => {
          localStorage.clear();
          this.$router.push("/");
        },
      }
        ];
  }
  else{
    this.homeMenu = [
      {
        label: "Login",
        to: "/login",
      },
      {
        label: "Register",
        to: "/register",
      }
        ];
  }
  if(this.developerid != null && this.developerid != undefined)
  {
  this.getDevByid();
  }
  }


 getDevByid(){
      this.submitted = true;
      
      DeveloperService.getDevelopersById(this.developerid).then(
        data => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
                  
                  this.profilepic = "data:image/png;base64,"+data.data.data.result.profile_pic;

            } else {
              alert("Could not Login")
            }
          }
        }
      );
         
}
  
  logout() {
    localStorage.clear();
    this.$router.push("/");
  }
}
</script>
