import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autService: AuthenticationService, private routes: Router) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.autService.loginFacebook().then((data) => {
      console.log(data);
      this.routes.navigate(['dashboard']);
    }).catch((error) => {
      console.log(error);
    } );
  }

  loginGoogle() {
    this.autService.loginGoogle().then((data) => {
      console.log(data);
      this.routes.navigate(['dashboard']);

    }).catch((error) => {
      console.log(error);
    } );
  }

  loginGit() {
    this.autService.loginGit().then((data) => {
      console.log(data);
      this.routes.navigate(['dashboard']);

    }).catch((error) => {
      console.log(error);
    } );
  }

  getStatus() {
    // this.autService.getStatus().
  }
}
