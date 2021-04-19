import { Injectable } from '@angular/core';
import { Flight } from '../interfaces/Flight';
import data from '../../assets/routes.json'

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  results;
  routes = data;

  // routes = [
  //   {
  //   "id": 1,
  //   "from": "Paryż",
  //   "to": "Londyn",
  //   "price": "50",
  //   "duration": "2:30",
  //   "departure": "15:00",
  //   "arrival": "17:30"
  //   },
  //     {
  //   "id": 2,
  //   "from": "Paryż",
  //   "to": "Warszawa",
  //   "price": "65",
  //   "duration": "2:20",
  //   "departure": "13:00",
  //   "arrival": "15:30"
  //   },
  //     {
  //   "id": 3,
  //   "from": "Warszawa",
  //   "to": "Nowy Jork",
  //   "price": "250",
  //   "duration": "7:30",
  //   "departure": "10:00",
  //   "arrival": "17:30"
  //   }
  // ]

  getAllRoutes(){
    return this.routes;
  }

  getUniqueDeparturePlaces(){
    return [...new Set(this.routes.map(item => item.from))];
  }

  getRoutesForCity(city:any){
    return [...new Set(this.routes.filter((s)=>s.from == city).map(item=>item.to))];
  }

  getRoutes(flightData){
    return this.routes.filter((s)=>s.from == flightData.place && s.to == flightData.destination);
  }


  constructor() { }
}
