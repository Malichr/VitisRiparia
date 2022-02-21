import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Wine } from 'src/app/shared/models/wine.model';

@Component({
  selector: 'app-wine-delete',
  templateUrl: './wine-delete.component.html',
  styleUrls: ['./wine-delete.component.scss']
})
export class WineDeleteComponent implements OnInit {

  @Input() wine: Wine = {} as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {wineId: string; wineName: string; downloadUrl: string},
    public dialogRef: MatDialogRef<WineDeleteComponent>,
    private service: FbBaseService<any>, private storage: AngularFireStorage
    ) { }


  ngOnInit(): void {
  }

  delete(): void {
    this.service.delete('wine', this.data.wineId).then(id => { /*console.log(id);*/ });
    this.storage.storage.refFromURL(this.data.downloadUrl).delete();
    this.dialogRef.close();
  }
}
