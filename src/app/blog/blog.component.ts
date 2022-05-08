import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
