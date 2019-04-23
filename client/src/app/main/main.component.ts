import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  show: boolean;

  constructor() { 
    let value=localStorage.getItem("isAdmin");
    if (value==="true") {
      this.show=true;
    }
    else{
      this.show=false;
    }
  }

  ngOnInit() {
  }

}
