import { Injectable } from '@angular/core';
import { Flight } from '../interfaces/Flight';
import data from '../../assets/routes.json'
import { Route } from '../models/Route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  results;
  flightData;
  routes = data;

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
