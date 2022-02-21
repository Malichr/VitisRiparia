import { Wine } from './../../../shared/models/wine.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { WineUpdateComponent } from '../update/wine-update.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { WineDeleteComponent } from '../delete/wine-delete.component';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {
  //@Input() wine?: Wine;
  @Input() wine: Wine = {} as any;
  @Output() getWine = new EventEmitter<Wine>();

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
    const dialogRef = this.dialog.open(WineDeleteComponent, {
      data:{wineId: id, wineName: productName, downloadUrl: picture}
    });
  }

  updateItem(): void {
    const dialogRef = this.dialog.open(WineUpdateComponent, {data: this.wine});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((wine: Wine) => {
      //console.log(wine);

        this.service.update('wine', this.wine?.id as string, wine).then(id => { console.log(id); });

    }, (err: any) => {
      //console.warn(err);
    });
  }
}
