import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facepets2';
  constructor (private autService: AuthenticationService, private route: Router) {
  }
  logout() {
    this.autService.logout().then((data) => {
      console.log(data);
      this.route.navigate(['login']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
