import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  count :number=10;
  intervelId:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.intervelId = setInterval(()=>{
      if(this.count===0){
        this.routeToProfile();
      }
      this.count--;
    },1000);
  }

  routeToProfile(){
    this.router.navigateByUrl('/professioanlDetails');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervelId);
  }

}
