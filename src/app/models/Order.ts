import { Route } from './Route';
import { Flight } from '../interfaces/Flight';
import { Luggage } from './Luggage'

export interface Order {
  route: Route;
  flight: Flight;
  luggage: Luggage;
  seatNo: number;
}
