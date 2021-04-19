import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places = [{"id":1,
  "name":"Warszawa",
  "timezone": "1",
  },
  {"id":2,
  "name":"Paryż",
  "timezone": "1",
  },
  {"id":3,
  "name":"Nowy Jork",
  "timezone": "-5",
  },
  {"id":4,
  "name":"Londyn",
  "timezone": "0",
  }]



  getAllPlaces(){
    return this.places;
  }


  constructor() { }
}
