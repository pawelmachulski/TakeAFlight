import { Component, OnInit, Input } from '@angular/core';
import { RoutesService } from "../../services/routes-service";
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../models/Order'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private routeService: RoutesService, private orderService: OrderService, private router: Router) { }

  results;
  flightDate;

  arrivalIcon = faPlaneArrival;
  departureIcon = faPlaneDeparture;

  order1: Order;

  ngOnInit(): void {
    this.results = this.routeService.results;
    this.flightDate = this.routeService.flightData.dateOfFlight;
  }

  order(result){

    let newOrder: Order = {route: result, flight: this.routeService.flightData, luggage: null, seatNo: null, fullPrice: null}

    this.orderService.orderData = newOrder;
    this.router.navigateByUrl('/order')
  }

}
