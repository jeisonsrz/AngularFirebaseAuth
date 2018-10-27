import { Injectable } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {HttpClient} from '@angular/common/http';
import {FirebaseDatabase} from '@angular/fire';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets: AngularFireList<Pet[]>;
  coby: AngularFireObject<Pet>;
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.pets = this.db.list('/pets');
  }

  getPets() {
    return this.db.list('/pets');
  }

  savePet(pet: any) {
    return this.pets.push(pet);
  }
  updatePet(pet: any) {
    return this.pets.update(pet.key, pet);
  }
  deletePet(key) {
    return this.pets.remove(key);
  }
}
