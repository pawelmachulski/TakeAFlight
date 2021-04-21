import { Component, OnInit, Input } from '@angular/core';
import { RoutesService } from "../../services/routes-service";
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../models/Order'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private routeService: RoutesService, private orderService: OrderService, private router: Router) { }

  result;

  order1: Order;

  ngOnInit(): void {
    this.result = this.routeService.results;
  }

  order(resul){

    let newOrder: Order = {route: resul, flight: this.routeService.flightData, luggage: null, seatNo: null}

    this.orderService.orderData = newOrder;
    this.router.navigateByUrl('/order')
  }

}
