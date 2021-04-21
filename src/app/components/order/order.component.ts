import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderSerivce: OrderService) { }

  order: Order;

  ngOnInit(): void {
    this.order = this.orderSerivce.orderData;
  }


}
