import { Component, OnInit } from '@angular/core';
import {Pet} from '../interfaces/pet';
import {PetsService} from '../services/pets.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: Pet[];
  action = 'list';
  pet: Pet = {nombre: '', tipo: ''};
  constructor(private servicioPets: PetsService) {
    /*this.servicioPets.getPets().valueChanges().subscribe((data: Pet[]) => {
      console.log('Traer datos');
      console.log(data);
      this.pets = data;
    }, (error) => {
      console.log('🤮');
    });*/
    this.servicioPets.getPets().snapshotChanges().pipe(
      map(
        (changes => {
          return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
        })
      )).subscribe((data: any[]) => {
        this.pets = data;
      }

    );
  }

  ngOnInit() {
  }

  emojiPet(tipo){
    switch (tipo) {
      case 'perro':{
        return '🐶';
      }
      case 'gato':{
        return '🐱';
      }
      case 'conejo':{
        return '🐰';
      }
    }
    return '🌵';
  }

  guardarMascota() {
    this.servicioPets.savePet(this.pet).then((data) => {
      console.log('Mascota Creada');
      this.action = 'list';
      this.pet = {nombre: '', tipo: ''};
    });
  }
  changeAction(pet) {
    console.log(pet);
    this.action = 'update';
    this.pet = pet;
  }
  actualizarMascota() {
    this.servicioPets.updatePet(this.pet).then(() => {
      console.log('Guardo los cambios');
      this.pet = {nombre: '', tipo: ''};
      this.action = 'list';
    });
  }
  eliminarMascota(key) {
    this.servicioPets.deletePet(key).then(() => {
      console.log('Eliminado');
    });
  }
}
