import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-f',
  templateUrl: './nav-f.component.html',
  styleUrls: ['./nav-f.component.css']
})
export class NavFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oo(){
    window.location.reload();
  }

}
