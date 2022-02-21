import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.scss'],
})
export class OrderDeleteComponent implements OnInit {

  @Input() order: Order = {} as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {orderId: string; email: string},
    public dialogRef: MatDialogRef<OrderDeleteComponent>,
    private service: FbBaseService<any>) { }

  ngOnInit() {}

  delete(): void {
    this.service.delete('order', this.data.orderId).then(id => { /*console.log(id);*/ });
    this.dialogRef.close();
  }
}
