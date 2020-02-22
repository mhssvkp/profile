import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent, NavigationEnd, Scroll } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  collapsed : boolean = true;
  active : string;

  constructor(private route: Router) {
     route.events.subscribe((val)=> { 
      if(val instanceof Scroll){
        if(!this.collapsed)this.toggleNavbar();
        this.active=val.routerEvent.urlAfterRedirects.substr(1);
      }
      });
  }

  ngOnInit() { }

  toggleNavbar(){
    this.collapsed=!this.collapsed;
  }

}
