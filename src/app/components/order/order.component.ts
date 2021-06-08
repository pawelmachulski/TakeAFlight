import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Luggage } from 'src/app/models/Luggage'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderSerivce: OrderService) { }

  order: Order;
  fullPrice: number;
  luggageButtonIsClicked:boolean = false;
  seatsButtonIsClicked:boolean = false
  selectedLuggage:Luggage = null;
  testToggle:boolean = false
  form=new FormGroup({
    Id:new FormControl(null)
  })
  passangers = [1];
  selectedSeatsList = [];
  alert = null;

  seats=[
    {Id:1,ItemName:"1A"},
    {Id:2,ItemName:"1B"},
    {Id:3,ItemName:"1C"},
    {Id:5,ItemName:"1E"},
	{Id:6,ItemName:"1F"},
    {Id:7,ItemName:"2A"},
    {Id:8,ItemName:"2B"},
    {Id:9,ItemName:"2C"},
    {Id:10,ItemName:"2D"},
	{Id:11,ItemName:"2E"},
    {Id:12,ItemName:"2F"},
    {Id:13,ItemName:"3A"},
    {Id:14,ItemName:"3B"},
    {Id:15,ItemName:"3C"},
	{Id:16,ItemName:"3D"},
    {Id:17,ItemName:"3E"},
    {Id:18,ItemName:"3F"},
    {Id:19,ItemName:"4A"},
    {Id:20,ItemName:"4B"},
	{Id:21,ItemName:"4C"},
    {Id:22,ItemName:"4D"},
    {Id:23,ItemName:"4E"},
    {Id:25,ItemName:"5A"},
	{Id:26,ItemName:"5B"},
    {Id:27,ItemName:"5C"},
    {Id:28,ItemName:"5D"},
    {Id:30,ItemName:"5F"},
	{Id:31,ItemName:"6A"},
    {Id:32,ItemName:"6A"},
    {Id:33,ItemName:"6C"},
    {Id:34,ItemName:"6D"},
    {Id:35,ItemName:"6E"},
	{Id:36,ItemName:"6F"},
    {Id:37,ItemName:"7A"},
    {Id:40,ItemName:"7D"},
	{Id:41,ItemName:"7E"},
    {Id:42,ItemName:"7F"},
    {Id:43,ItemName:"8A"},
    {Id:44,ItemName:"8B"},
    {Id:45,ItemName:"8C"},
	  {Id:46,ItemName:"8D"},
    {Id:47,ItemName:"8E"},
    {Id:48,ItemName:"8F"},
    {Id:50,ItemName:"9B"},
	  {Id:51,ItemName:"9C"},
    {Id:52,ItemName:"9D"},
    {Id:53,ItemName:"9E"},
    {Id:54,ItemName:"9F"},
    {Id:55,ItemName:"10A"},
    {Id:59,ItemName:"10E"},
    {Id:60,ItemName:"10F"},
  ]

  ngOnInit(): void {
    this.order = this.orderSerivce.orderData;
    this.fullPrice = parseInt(this.order.route.price) * this.order.flight.noOfPassengers;
  }

  luggageToggle(){
    this.luggageButtonIsClicked = this.luggageButtonIsClicked ? true : true;
  }

  seatsToggle(){
    this.seatsButtonIsClicked = this.seatsButtonIsClicked ? true : true;
    this.order.luggage = this.selectedLuggage;
    console.log(this.seatsButtonIsClicked)
    console.log(this.selectedLuggage)
  }

  selectNoneLuggage(){
    this.selectedLuggage = Luggage.None;
    this.seatsToggle();
  }

  selectSmallLuggage(){
    this.selectedLuggage = Luggage.Hand;
    this.seatsToggle();
  }

  selectBigLuggage(){
    this.selectedLuggage = Luggage.Checked;
    this.seatsToggle();
  }

  addAnotherPlace(){
    console.log(this.form.get('Id').value)
    if(this.alert != null)
    {
      return;
    }
    this.passangers.push(this.passangers.length);
    if (!this.selectedSeatsList.some((item) => item == this.form.get('Id').value)) {
      this.selectedSeatsList.push(this.form.get('Id').value)
    }
    else{
      this.alert = "Nie można wybrać dwóch takich samych miejsc!"
    }

    console.log(this.alert)
    // this.seats.forEach((element,index)=>{
    //   if(element.ItemName==this.form.get('Id').value){
    //     delete this.seats[index];
    //     console.log(this.seats)
    //   }
    // })
  }

  commitOrder(){
    this.testToggle = this.testToggle ? true : true;
  }

  clearAlert(){
    this.alert = null;
  }


}
