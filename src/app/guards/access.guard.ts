import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service'

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private loginService: LoginService) {} 

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const urlSplitted = state.url.split('/')
    const moduleRole = urlSplitted[1]
    if (this.loginService.infoUser['role'] === moduleRole.toUpperCase()) {
      return true
    } else {
      return false
    }
  }
  
}
