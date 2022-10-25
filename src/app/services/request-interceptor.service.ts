import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor(private securityService : KeycloakSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Request Http Interceptor ...")

      if(!this.securityService.kc.authenticated) return next.handle(req) ;

      let req2 = req.clone({
        setHeaders:{
          Authorization:'Bearer '+this.securityService.kc.token
        }
      });
      return next.handle(req2)
  }
}
