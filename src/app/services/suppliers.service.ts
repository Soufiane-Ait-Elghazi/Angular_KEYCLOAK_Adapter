import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient,private securityService:KeycloakSecurityService) { }

  public getSuppliers(){
      return this.http.get("http://localhost:8083/suppliers");
      //,{headers:new HttpHeaders({Authorization:'Bearer '+this.securityService.kc.token})});
  }
}
