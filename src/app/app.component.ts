import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public securityService:KeycloakSecurityService){
  }
  title = 'WebFront';
   onLogout():void{ this.securityService.kc.logout();}
   onLogin():void{ this.securityService.kc.login();}
   onChangePassword(){this.securityService.kc.accountManagement();}
  ngOnInit():void{
  }

  isAppManager(){
      return this.securityService.kc.hasRealmRole("app-manager")
  }




}
