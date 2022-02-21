import { Champagne } from './../../../shared/models/champagne.model';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-champagne-delete',
  templateUrl: './champagne-delete.component.html',
  styleUrls: ['./champagne-delete.component.scss']
})
export class ChampagneDeleteComponent implements OnInit {

  @Input() champagne: Champagne = {} as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {champagneId: string; champagneName: string; downloadUrl: string},
    public dialogRef: MatDialogRef<ChampagneDeleteComponent>,
    private service: FbBaseService<any>, private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.service.delete('champagne', this.data.champagneId).then(id => { /*console.log(id);*/ });
    this.storage.storage.refFromURL(this.data.downloadUrl).delete();
    this.dialogRef.close();
  }
}
