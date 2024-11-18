import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-conge',
  templateUrl: './nav-conge.component.html',
  styleUrls: ['./nav-conge.component.css']
})
export class NavCongeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oo(){
    window.location.reload();
  }

}
