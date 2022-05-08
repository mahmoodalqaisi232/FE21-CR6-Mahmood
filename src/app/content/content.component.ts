import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listItems = document.getElementsByClassName("list-item")
  
  descriptionDefault:string ="Travelex travel insurance can cover a wide variety of incidents, mishaps, and activities. Dependent on which plan you choose, you can receive coverage for trip delays, trip cancellations, delayed baggage, adventure sports, and more."
changeDes(){
 let  listInfo:any=[{
    name:"Travel Insucrance",
    description:"Travelex travel insurance can cover a wide variety of incidents, mishaps, and activities. Dependent on which plan you choose, you can receive coverage for trip delays, trip cancellations, delayed baggage, adventure sports, and more."
  },{
    name:"Flights",
    description:"If you’re planning a last-minute trip or a quick weekend away, Travelex’s travel insurance plans may provide more protection than you’re looking for. In these instances, Flight Insurance is a choice worth considering.",
  },{
    name:"Sightseeing",
    description:"Kick off your day with a walk up to the Royal Palace atop of the aptly named Castle Hill. You can either walk up the steps all the way to the top or, if you’re feeling slightly less energetic, you can take the Castle Hill Funicular tram up the 167 feet instead.",
  },{
    name:"Accommodation",
    description:"Since Travelex Travels and Tours began in 2002, we’ve created unforgettable travel experiences for thousands of clients from all over the world.",
  }]
  let descriptionElement = document.getElementById("left-list-description");
      for (let i=0; i<this.listItems.length;i++) {
          this.listItems[i].addEventListener('click', function(){
          descriptionElement.innerHTML= " ";
          descriptionElement.innerHTML= listInfo[i].description ;
          })
      }
      }


  constructor() {
  }
  ngOnInit(): void {
    this.changeDes()
    AOS.init();
    console.log(this.listItems)
  }
}


