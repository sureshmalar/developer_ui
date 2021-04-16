<style scoped lang="scss" src="./developersList.scss"></style>
<template src="./developersList.html"></template>

<script lang="ts">
import { Developers } from "@/model/developers";
import { Component, Vue } from "vue-property-decorator";
import DeveloperService from "../../../services/developerService";

@Component
export default class DevelopersList extends Vue {
  developers:Developers[] = [];
  page: number = 1;
  totalCount: number = 0;
  selectedData =[];
  displayBasic: boolean = false;
  created()  {
      this.listDevelopers();
}
listDevelopers(){
    DeveloperService.listDevelopers().then(response => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          if (response.data.data.result != null && response.data.data.result.length > 0) {
            this.developers = response.data.data.result;
          }
        }
      }
    });
}

deleteDeveloper(id: any){
  var devId = id;
    DeveloperService.deleteDeveloper(devId).then(response => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          alert("Record Deleted");   
          this.listDevelopers();       
        }
      }
    });
}

deleteMultiple()
{
var result = "";

  for (var i=0; i<this.selectedData.length; i++){
    var selectedcol = this.selectedData[i].id;
    alert(selectedcol);

    if(i>0){
       result += ','; 
    }
    result += selectedcol;
}

let data = {
  "ids":result
}
 alert(result);
    DeveloperService.deleteMultipleDevelopers(data).then(response => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          alert("Record Deleted");   
          this.listDevelopers();       
        }
      }
    });

}


editDeveloper(id)
{
 // alert(JSON.stringify(data));
   localStorage.setItem("devId",id);
  this.$router.push("/updateDeveloper");

           // this.displayBasic = true;

}

updateDeveloper(data)
{
  alert(data);
    DeveloperService.updateDeveloper(data).then(response => {
      if (response != undefined && response.data != undefined) {
        // alert(JSON.stringify(response.data.data.result));
        if (response.status == 200) {
          alert("Record Deleted");   
          this.listDevelopers();       
        }
      }
    });
}
}
</script>