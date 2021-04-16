import { Constant } from '@/helpers/constant';
import { Rest, RestHeader } from '@/helpers/rest';
import axios, { AxiosResponse } from 'axios'; //npm install axios --save //npm install --save es6-promise For IE

class DeveloperService {
  axios;
  constructor() {
    this.axios = axios.create({});
  }
  public loginDeveloper(data: any): Promise<AxiosResponse<any>> {
    return this.axios.post(Constant.SERVER_URL + 'api/developers/login', data,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITHOUT_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }
  public registerDeveloper(data: any): Promise<AxiosResponse<any>> {
    return this.axios.post(Constant.SERVER_URL + 'api/developers/register', data,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITHOUT_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }
  public updateDeveloper(data: any): Promise<AxiosResponse<any>> {
    return this.axios.post(Constant.SERVER_URL + 'api/developers/update', data,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITH_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }
  public listDevelopers(): Promise<AxiosResponse<any>> {
    return this.axios.get(Constant.SERVER_URL + 'api/developers/getAllDevelopers',
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITH_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }

  public deleteDeveloper(id): Promise<AxiosResponse<any>> {
    return this.axios.get(Constant.SERVER_URL + 'api/developers/delete/'+id,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITH_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }

  
  public deleteMultipleDevelopers(data : any): Promise<AxiosResponse<any>> {
    return this.axios.post(Constant.SERVER_URL + 'api/developers/deleteMultipleDevelopers/',data,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITH_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }
  
  public changePassword(data: any): Promise<AxiosResponse<any>> {
    return this.axios.post(Constant.SERVER_URL + 'api/developers/forgotPassword', data,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITHOUT_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }

  public getDevelopersById(id): Promise<AxiosResponse<any>> {
    return this.axios.get(Constant.SERVER_URL + 'api/developers/getDevelopersById/'+id,
      { headers: Rest.getHeaders(RestHeader.APPLICATION_JSON_WITH_BEARER_TOKEN) }).then(ag => {
        return ag;
      }).catch(err => {
        if (err == "Error: Request failed with status code 401") {
          alert("Session Expired");
        }
        else if (err == "Error: Request failed with status code 500") {
          return err;
        }
        else if (err == "Error: Request failed with status code 400") {
           alert("Bad Request!");
          return err;
        } else if (err == "Error: Request failed with status code 404") {
          alert("Page Not Found");
        }
        return err;
        // Manage the state of the application if the request
        // has failed
      });
  }
}
export default new DeveloperService();