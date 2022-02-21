import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Wine } from 'src/app/shared/models/wine.model';
import { MatDialog } from '@angular/material/dialog';
import { WineAddComponent } from '../add/wine-add.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  title = 'Wine';
  list$: Observable<Wine[]> | null = null;
  searchTerm: string;

  errorObject = null;
  adminUid: string | undefined;


  constructor(private service: FbBaseService<Wine>, private dialog: MatDialog, private router: Router,
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
    this.list$ = this.service.get('wine').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  wineAddDialog(): void {
    const dialogRef = this.dialog.open(WineAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((wine: Wine) => {
      //console.log(wine);
      //if (wine?.productName) {
        this.service.add('wine', wine).then(id => { /*console.log(id);*/ });
      //}
    }, err => {
      //console.warn(err);
    });
  }

  onGetWine(event: Wine): void {
    this.router.navigateByUrl('/details/wine/' + event.id);
  }

}
