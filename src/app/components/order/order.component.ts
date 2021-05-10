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
  fullPrice: number;

  ngOnInit(): void {
    this.order = this.orderSerivce.orderData;
    console.log(this.order);
    console.log(this.order.flight.noOfPassengers);
    this.fullPrice = parseInt(this.order.route.price) * this.order.flight.noOfPassengers;
    console.log(this.fullPrice);
  }


}
