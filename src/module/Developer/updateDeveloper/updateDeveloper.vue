<style scoped lang="scss" src="./updateDeveloper.scss"></style>
<template src="./updateDeveloper.html"></template>

<script lang="ts">
import { Developers } from "@/model/developers";
import { Component, Vue } from "vue-property-decorator";
import DeveloperService from "../../../services/developerService";

@Component
export default class UpdateDeveloper extends Vue {
  developers: Developers = new Developers();
  submitted = false;
  $validator: any;
  devid : any;

  created()
  {
    this.devid = localStorage.getItem("devId");
  this.getDevByid();
  }

    onUpload(event) {
    for (const file of event.files) {
      let fileNameArray = file.name.split('.');
      if (file.size >= 1000000) {
        alert("File size exceeds")
      } else if (fileNameArray[fileNameArray.length - 1] != 'jpg' && fileNameArray[fileNameArray.length - 1] != 'jpeg' && fileNameArray[fileNameArray.length - 1] != 'png') {
        alert("Profile Pic only accepts jpg, jpeg and png file format");
      } else {
        this.developers.image_name = file.name;
        const reader = new FileReader();
        reader.onload = this.readProfilePic.bind(this);
        reader.readAsBinaryString(file);
      }
    }
  }
  readProfilePic(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.developers.profile_pic = btoa(binaryString);
}

 getDevByid(){
      this.submitted = true;
      
      DeveloperService.getDevelopersById(this.devid).then(
        data => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
                   // this.profilepic = data.data.user.profile_pic;
                  //  this.$router.push("/developersList");
                  this.developers = data.data.data.result;

            } else {
              alert("Could not Login")
            }
          }
        }
      );
         
}

registerDeveloper(){
      this.submitted = true;
        this.$validator.validate().then(valid => {
          if (valid) {
            this.submitted = false;
      DeveloperService.updateDeveloper(this.developers).then(
        data => {
          if (data != undefined && data.data != undefined) {
            if (data.data.status == 200) {
              alert("Developer Updated Successfully");
            } else {
              alert("Developer not Updated")
            }
          }
        }
      );
         } });
}
}
</script>