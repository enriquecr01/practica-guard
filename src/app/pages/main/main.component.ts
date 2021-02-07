import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-main',
  template: `
    <button mat-raised-button color="warn" (click)="logout()">Logout</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainComponent {

  constructor(private router: Router,
              private loginService: LoginService) {}

  logout() {
    this.router.navigate(['/login']);
    this.loginService.infoUser = {}
  }

}
