import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private autService: AngularFireAuth) {}
  loginFacebook () {
    const provedor = new firebase.auth.FacebookAuthProvider();
    return this.autService.auth.signInWithPopup(provedor);
  }

  loginGit () {
    const provedor = new firebase.auth.GithubAuthProvider();
    return this.autService.auth.signInWithPopup(provedor);
  }

  loginGoogle () {
    const provedor = new firebase.auth.GoogleAuthProvider();
    return this.autService.auth.signInWithPopup(provedor);
  }
  getStatus() {
    return this.autService.authState;
  }
  logout() {
    return this.autService.auth.signOut();
  }
}
