import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatMap, last } from 'rxjs/operators';
import { COLORS } from 'src/app/shared/database/color.database';
import { NATURES } from 'src/app/shared/database/nature.database';
import { PROCEDURE } from 'src/app/shared/database/procedure.database';

@Component({
  selector: 'app-champagne-add',
  templateUrl: './champagne-add.component.html',
  styleUrls: ['./champagne-add.component.scss']
})
export class ChampagneAddComponent implements OnInit {

  colors = COLORS;
  natures = NATURES;
  procedures = PROCEDURE;
  uploadPercent$: Observable<number | undefined> | undefined;
  downloadUrl$: Observable<string> | undefined;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    productName: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    picture: new FormControl(''),
    winery: new FormControl(''),
    unitPrice: new FormControl(''),
    articleNumber: new FormControl(''),
    vintage: new FormControl('', Validators.required),
    color: new FormControl(''),
    packaging: new FormControl('', Validators.required),
    wineRegion: new FormControl(''),
    country: new FormControl(''),
    grapeVariety: new FormControl(''),
    nature: new FormControl(''),
    wineStyle: new FormControl(''),
    procedure: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<ChampagneAddComponent>, private storage: AngularFireStorage) {
  }

  uploadFile(event: any){
    const file: File = event.target.files[0];
    const filePath = `champagnes/${file.name}`;
    const task = this.storage.upload(filePath, file);

    this.uploadPercent$ = task.percentageChanges();

    this.downloadUrl$ = task.snapshotChanges()
        .pipe(
          last(),
          concatMap(() => this.storage.ref(filePath).getDownloadURL())
        );

        this.downloadUrl$.subscribe();

        this.form.value.picture = this.downloadUrl$;

        this.downloadUrl$.subscribe(res => this.form.value.picture = res);
  }

  ngOnInit(): void {
  }
}
