import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-view-home',
  templateUrl: './timeline-view-home.component.html',
  styleUrls: ['./timeline-view-home.component.css']
})
export class TimelineViewHomeComponent implements OnInit {

  constructor() { }

 progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
  ngOnInit() {
    window.onscroll = ()=>this.progress();
  }

}
