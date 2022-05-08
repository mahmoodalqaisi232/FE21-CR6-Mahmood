import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {

   }

   showNav(){
    let myNav:HTMLElement = document.querySelector('#myNav');
  window.onscroll = ()=>{
    document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150 ?
    myNav.classList.add("navBg"): myNav.classList.remove("navBg")
  }
  }

  ngOnInit(): void {
    this.showNav();
  }
}
