import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
 @Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  porcentaje: Observable<number>;
  url: Observable<string>;
  constructor(private storage: AngularFireStorage ) { }
   ngOnInit() {
  }
   uploadFile(event) {
    console.log(event);
    const file = event.target.files[0];
    const filePath = '/imagenes/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.porcentaje = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.url = fileRef.getDownloadURL() )
    )
      .subscribe((data) => {
        console.log(data);
      });
  }
 }
