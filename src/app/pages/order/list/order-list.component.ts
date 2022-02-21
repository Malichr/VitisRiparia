import { Order } from './../../../shared/models/order.model';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  list$: Observable<Order[]> | null = null;
  errorObject = null;
  searchTerm: string;

  constructor(private service: FbBaseService<any>, private router: Router, private sender: SenderService) { }

  ngOnInit(): void {

    this.errorObject = null;
    this.list$ = this.service.getOrder().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  onGetOrder(event: Order): void {
    this.sender.userEmail = event.userEmail;
    this.sender.orderId = event.id;
    this.router.navigateByUrl('/orders');
  }
}
