import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-profiles',
  templateUrl: './tech-profiles.component.html',
  styleUrls: ['./tech-profiles.component.css']
})
export class TechProfilesComponent implements OnInit {

  sprofiles:any = [
    {label:'Facebook',src:'assets/images/fb.webp',link:'https://www.facebook.com/kvatppavan'},
    {label:'Instagram',src:'assets/images/instagram.svg',link:'https://www.instagram.com/vayu_puthra/'},
  ]

  techProfiles:any=[
    {label:'LinkedIn',src:'assets/images/linkedin.png',link:'https://www.linkedin.com/in/mhssvkp/'},
    {label:'Github',src:'assets/images/github.png',link:'https://github.com/mhssvkp'},
    {label:'Stackoverflow',src:'assets/images/stackoverflow.png',link:'https://stackoverflow.com/users/11751221/pavan-kumar'}
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(link){
    window.open(link);
  }

}
