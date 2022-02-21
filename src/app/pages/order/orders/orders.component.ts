import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { SenderService } from 'src/app/services/sender.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Observable<Order[]> | undefined;
  firstName: string | undefined;
  searchTerm: string;

  constructor(private sender: SenderService, private service: FbBaseService<any>) { }

  ngOnInit(): void {
    this.orders = this.service.getOrders(this.sender.userEmail, this.sender.orderId);
  }
}
