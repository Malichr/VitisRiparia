import { Champagne } from './../../../shared/models/champagne.model';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError } from 'rxjs/operators';
import { ChampagneAddComponent } from '../add/champagne-add.component';

@Component({
  selector: 'app-champagne-list',
  templateUrl: './champagne-list.component.html',
  styleUrls: ['./champagne-list.component.scss']
})
export class ChampagneListComponent implements OnInit {

  title = 'Champagne';
  list$: Observable<Champagne[]> | null = null;
  searchTerm: string;

  errorObject = null;
  adminUid: string | undefined;

  constructor(private service: FbBaseService<Champagne>, private dialog: MatDialog, private router: Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.get();

      this.afAuth.onAuthStateChanged((user) => {
        if(user){
          this.adminUid = user.uid;
        }
      });
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('champagne').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  champagneAddDialog(): void {
    const dialogRef = this.dialog.open(ChampagneAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((champagne: Champagne) => {
      //console.log(champagne);
      //if (wine?.productName) {
        this.service.add('champagne', champagne).then(id => { /*console.log(id);*/ });
      //}
    }, err => {
      //console.warn(err);
    });
  }

  onGetChampagne(event: Champagne): void {
    this.router.navigateByUrl('/details/champagne/' + event.id);
  }
}
