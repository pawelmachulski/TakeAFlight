import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { RoutesService } from "../../services/routes-service";
import {Flight} from '../../models/Flight';
import { Router } from '@angular/router';
import { Route } from '../../models/Route';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  form: FormGroup;
  places = [];
  destinations = [];
  passengers:number;
  date:Date;
  results:Route[];

  constructor(private formBuilder: FormBuilder,
              private routesService: RoutesService,
              private router:Router) {
    this.form = this.formBuilder.group({
      place: ['', Validators.required],
      destination: ['', Validators.required],
      passengers: [1, Validators.required],
      date: null
    });
    this.places = this.routesService.getUniqueDeparturePlaces();
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  setDestinations() {
    this.destinations = this.routesService.getRoutesForCity(this.form.value.place);
  }

  onSubmit(){
    let newFlight: Flight =
      {fromCity: this.form.value.place,
      dateOfFlight: this.form.value.date,
      toCity: this.form.value.destination,
      noOfPassengers: this.form.value.passengers
      };

    this.routesService.flightData = newFlight;
    this.routesService.results = this.routesService.getRoutes(newFlight);
    this.router.navigateByUrl('/result')

  }

  searchIcon = faSearch;
  arrivalIcon = faPlaneArrival;
  departureIcon = faPlaneDeparture;
  passangersIcon = faUsers;
  callendarIcon = faCalendar;
  virusIcon = faVirus;
  bedIcon = faBed;
  carIcon = faCar;

  get place() {return this.form.get("place")}
  get destination() {return this.form.get("destination")}
  get passenger() {return this.form.get("passenger")}

}
