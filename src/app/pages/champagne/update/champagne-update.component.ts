import { Champagne } from './../../../shared/models/champagne.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { COLORS } from 'src/app/shared/database/color.database';
import { NATURES } from 'src/app/shared/database/nature.database';
import { PROCEDURE } from 'src/app/shared/database/procedure.database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { concatMap, last } from 'rxjs/operators';

@Component({
  selector: 'app-champagne-update',
  templateUrl: './champagne-update.component.html',
  styleUrls: ['./champagne-update.component.scss']
})
export class ChampagneUpdateComponent implements OnInit {

  colors = COLORS;
  natures = NATURES;
  procedures = PROCEDURE;
  uploadPercent$: Observable<number | undefined> | undefined;
  downloadUrl$: Observable<string> | undefined;


  form: FormGroup = new FormGroup({
    productName: new FormControl(this.data.productName, Validators.required),
    price: new FormControl(this.data.price, Validators.required),
    picture: new FormControl(this.data.picture),
    winery: new FormControl(this.data.winery),
    unitPrice: new FormControl(this.data.unitPrice),
    articleNumber: new FormControl(this.data.articleNumber),
    vintage: new FormControl(this.data.vintage, Validators.required),
    color: new FormControl(this.data.color),
    packaging: new FormControl(this.data.packaging, Validators.required),
    wineRegion: new FormControl(this.data.wineRegion),
    country: new FormControl(this.data.country),
    grapeVariety: new FormControl(this.data.grapeVariety),
    nature: new FormControl(this.data.nature),
    wineStyle: new FormControl(this.data.wineStyle),
    procedure: new FormControl(this.data.procedure)
  });

  constructor(public dialogRef: MatDialogRef<ChampagneUpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: Champagne,
  private storage: AngularFireStorage) { }

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
