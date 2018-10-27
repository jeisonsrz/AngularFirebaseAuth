import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { PetComponent } from './pet/pet.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthenticationGuard} from './services/authentication.guard';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import * as path from 'path';
import {AngularFireStorageModule} from '@angular/fire/storage';

const rutas : Routes = [
  {path: '', component : InicioComponent},
  {path: 'inicio', component : InicioComponent},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent, canActivate: [AuthenticationGuard]},
  {path: 'perfil', component : PerfilComponent, canActivate: [AuthenticationGuard] },
  {path: 'pet', component : PetComponent, canActivate: [AuthenticationGuard]},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PerfilComponent,
    InicioComponent,
    PetComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
