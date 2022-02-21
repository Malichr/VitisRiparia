import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/shared/models/order.model';
import { OrderDeleteComponent } from '../delete/order-delete.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  @Input() order: Order = {} as any;
  @Output() getOrder = new EventEmitter<Order>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(id: string, userEmail: string): void {
    const dialogRef = this.dialog.open(OrderDeleteComponent, {
      data:{orderId: id, email: userEmail}
    });
  }
}
