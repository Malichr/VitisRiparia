import { SenderService } from './../../../services/sender.service';
import { Cart } from './../../../shared/models/cart.model';
import { Order } from './../../../shared/models/order.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';

declare const paypal: any;

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef | undefined;

  email: any;
  carts: Observable<Cart[]> | undefined;
  cartId: string;

  productName: any;
  price: any;
  quantity: any;
  picture: any;
  amount = 0;

  paidFor = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  form2: FormGroup = new FormGroup({
    postalCode: new FormControl(''),
    settlement: new FormControl(''),
    street: new FormControl(''),
    houseNumber: new FormControl('')
  });

  constructor(private service: FbBaseService<any>, private sender: SenderService) {}

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => actions.order.create({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            purchase_units:[
              {
                amount: {
                  currency: 'HUF',
                  value: this.amount
                }
              }
            ]
          }),
        onApprove: async (data: any, actions: any) => {
          this.paidFor = true;
          this.orderAdd();
          this.service.deleteCart('cart', this.email, this.cartId);
          //console.log(order);

        },

        onError: () => {
         //console.log(err);
        }
      })
      .render(this.paypalElement?.nativeElement);

    this.email = this.sender.userEmail;

    this.carts = this.service.getCart(this.email);

    this.carts.subscribe(res =>
      res.forEach(element => {
        this.amount = +this.amount + +element.price;
        this.cartId = element.id;
      })
    );
  }

  orderAdd(){
    this.carts.subscribe(res =>
      res.forEach(element => {
        this.productName = element.productName;
        this.price = element.price;
        this.quantity = element.quantity;
        this.picture = element.picture;

        if(this.form.valid && this.form2.valid){
          const newOrder: Order ={
            id: '',
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            phoneNumber: this.form.value.phoneNumber,

            postalCode: this.form2.value.postalCode,
            settlement: this.form2.value.settlement,
            street: this.form2.value.street,
            houseNumber: this.form2.value.houseNumber,

            userEmail: this.email,
            productName: this.productName,
            price: this.price,
            quantity: this.quantity,
            picture: this.picture
          };
          this.service.add('order', newOrder).then((id: any) => { console.log(id); });
        }
      })
    );
  }
}
