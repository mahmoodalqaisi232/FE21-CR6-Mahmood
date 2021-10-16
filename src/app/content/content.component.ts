import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  texts:any= document.getElementsByClassName("descriptions");

  list:any =[{
    name:"Travel Insucrance",
    description:"Travelex travel insurance can cover a wide variety of incidents, mishaps, and activities. Dependent on which plan you choose, you can receive coverage for trip delays, trip cancellations, delayed baggage, adventure sports, and more."
  },{
    name:"Flights",
    description:"If you’re planning a last-minute trip or a quick weekend away, Travelex’s travel insurance plans may provide more protection than you’re looking for. In these instances, Flight Insurance is a choice worth considering.",
  },{
    name:"Sightseeing",
    description:"Since Travelex Travels and Tours began in 2002, we’ve created unforgettable travel experiences for thousands of clients from all over the world.",
  },{
    name:"Accommodation",
    description:"Since Travelex Travels and Tours began in 2002, we’ve created unforgettable travel experiences for thousands of clients from all over the world.",
  }]


  constructor() {}

  
  ngOnInit(): void {
  }
}


