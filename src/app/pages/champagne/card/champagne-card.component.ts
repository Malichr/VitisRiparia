import { Champagne } from './../../../shared/models/champagne.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ChampagneDeleteComponent } from '../delete/champagne-delete.component';
import { ChampagneUpdateComponent } from '../update/champagne-update.component';

@Component({
  selector: 'app-champagne-card',
  templateUrl: './champagne-card.component.html',
  styleUrls: ['./champagne-card.component.scss']
})
export class ChampagneCardComponent implements OnInit {

  @Input() champagne: Champagne = {} as any;
  @Output() getChampagne = new EventEmitter<Champagne>();

  uid: string | undefined;

  constructor(private service: FbBaseService<any>,  private dialog: MatDialog, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.uid = user.uid;
      }
    });
  }

  deleteItem(id: string, productName: string, picture: string): void {
    const dialogRef = this.dialog.open(ChampagneDeleteComponent, {
      data:{champagneId: id, champagneName: productName, downloadUrl: picture}
    });
  }

  updateItem(): void {
    const dialogRef = this.dialog.open(ChampagneUpdateComponent, {data: this.champagne});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((champagne: Champagne) => {
        this.service.update('champagne', this.champagne?.id as string, champagne).then(id => { console.log(id); });
    }, (err: any) => {
    });
  }
}
