import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private titleService: Title,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Haz login mamahuebazo');
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  async login() {
    if (this.loginForm.valid) {
      let user = await this.loginService.login(this.loginForm.value.username, this.loginForm.value.password);

      if (Object.keys(user).length === 0) {
        console.log('te la pelaste')
      } else {
        this.router.navigate(['/']);
      }
    }
  }

}
