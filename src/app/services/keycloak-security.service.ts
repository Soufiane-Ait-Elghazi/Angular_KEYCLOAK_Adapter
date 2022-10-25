import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'Keycloak-js';

declare var Keycloak :any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc:KeycloakInstance = new Keycloak();
  constructor() { }

 async init(){
    console.log("security Initialisation ...");
    this.kc = new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"ecom-realm",
      clientId:"angular-app"
    });
  await this.kc.init({
   // onLoad:'login-required'
      onLoad:'check-sso',
      //promiseType:'native'

    })
    console.log(this.kc.token);
  }
}
