import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {

  isTimeline:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  toggle(view){
    this.isTimeline = (view === 'timeline')?true:false;
  }

}
