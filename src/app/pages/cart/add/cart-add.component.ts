import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.scss']
})
export class CartAddComponent implements OnInit {

  email: string | null | undefined;
  id = '';
  dataNameStr = '';
  products: Observable<any[]> | undefined;
  productName: any;
  price: any;
  picture: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    userEmail: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    picture: new FormControl('')
  });

  constructor(private afAuth: AngularFireAuth, private service: FbBaseService<any>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
    }

    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.email = user.email;
      }
    });

    this.products = this.service.getProducts(this.dataNameStr, this.id);

    this.products.subscribe(res =>
      res.forEach(element => {
        this.productName = element.productName;
        this.price = element.price;
        this.picture = element.picture;
      })
      );
  }

  addCart(): void {
    if(this.form.valid){
      const newCart: Cart  ={
        id: '',
        userEmail: this.email,
        productName: this.productName,
        price: this.price,
        quantity: this.form.value.quantity,
        picture: this.picture
      };
      this.service.add('cart', newCart).then((id: any) => {});
    }
  }
}
