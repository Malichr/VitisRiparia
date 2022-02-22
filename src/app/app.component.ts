import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartListComponent } from './pages/cart/list/cart-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthService } from './services/auth.service';
import { FbBaseService } from './services/fb-base.service';
import { TitleService } from './services/routing/title.service';
import { MENUS } from './shared/database/menu.database';
import { Cart } from './shared/models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'VitisRiparia';

  menus = MENUS;
  uid: string | undefined;
  email: string | null | undefined;
  carts: Observable<Cart[]> | undefined;
  cartLength: number;
  qrInfo: string;
  currentPlatform: boolean;

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, public dialog: MatDialog,
    private titleService: TitleService, private service: FbBaseService<any>, private barcodeScanner: BarcodeScanner,
    private router: Router, public platform: Platform) {
                this.titleService.refreshTitle();
               }

  logout(): void {
    this.authService.logout();
    window.location.assign('/');
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.uid = user.uid;
      }
    });

    this.afAuth.onAuthStateChanged((user) => {
      if(user){
         this.email = user.email;
      }
    });

    this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    this.currentPlatform = this.platform.is('desktop');
  }

  openCartListDialog(){
    const dialogRef = this.dialog.open(CartListComponent, {data: {userEmail: this.email}, width: '100%'});
    this.carts = this.service.getCart(this.email);
    this.carts.subscribe(result => {
      this.cartLength = result.length;
    });
  }

  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result =>{
      this.carts = this.service.getCart(this.email);
      this.carts.subscribe(res => {
        this.cartLength = res.length;
      });
    });
  }

  openRegistrationDialog(){
    const dialogRef = this.dialog.open(RegistrationComponent);
  }

  startScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.router.navigate([barcodeData.text]);
     }).catch(err => {
     });
  }
}
