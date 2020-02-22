import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {

  headers:any=[{id:'tech-fw',value:'Language/Technology'},{id:'rating',value:'Self Rating'}];
  tableData:any=[{'tech-fw':'Java','rating':'3'},
  {'tech-fw':'JavaScript','rating':'4'},
  {'tech-fw':'TypeScript','rating':'3.5'},
  {'tech-fw':'HTML','rating':'4'},
  {'tech-fw':'CSS','rating':'3.5'},
  {'tech-fw':'SpringBoot','rating':'3'},
  {'tech-fw':'Angular','rating':'4'},
  {'tech-fw':'React','rating':'3'},
  {'tech-fw':'MySQL','rating':'3'},
  {'tech-fw':'PostgreSQL','rating':'3'}]

  constructor() { }

  ngOnInit(): void {
  }

}
