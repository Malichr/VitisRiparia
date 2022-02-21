import { SenderService } from './../../../services/sender.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  carts: Observable<Cart[]> | undefined;
  displayedColumns: string[] = ['picture', 'productName', 'price', 'quantity', 'delete'];
  dataSource: any;
  amount = 0;

  constructor(private service: FbBaseService<any>, public dialogRef: MatDialogRef<CartListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userEmail: string}, private router: Router,
              private sender: SenderService) {}

  ngOnInit(): void {
    this.carts = this.service.getCart(this.data.userEmail);
    this.dataSource = this.carts;

    this.carts.subscribe(res =>
      res.forEach(element => {
        this.amount = +this.amount + +element.price;
      })
      );
  }

  navTo(url: string): void {
    this.sender.userEmail = this.data.userEmail;
    this.router.navigateByUrl(url);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteItem(id: string){
    this.service.delete('cart', id);
  }
}
