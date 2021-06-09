import { Route } from './Route';
import { Flight } from '../models/Flight';
import { Luggage } from './Luggage'

export interface Order {
  route: Route;
  flight: Flight;
  luggage: Luggage;
  seatNo: string[];
  fullPrice: number;
}
