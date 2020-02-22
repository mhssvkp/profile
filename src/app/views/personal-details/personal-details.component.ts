import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  games:any =[
    {name:'Hockey',src:'assets/images/hockey.png'},
    {name:'Shuttle Badminton',src:'assets/images/badminton.png'},
    {name:'Basket Ball',src:'assets/images/basketball.png'},
    {name:'Rainbow Six Siege (PC game)',src:'assets/images/r6s.png'}
  ];

  admirations:any =[
    {name:'Suriya (Actor)',src:'assets/images/suriya.jpg'},
    {name:'Nayanathara (Actress)',src:'assets/images/nayana.jpg'},
    {name:'Ravi Teja (Actor)',src:'assets/images/raviteja.jpg'},
    {name:'Deepika Padukone (Actress)',src:'assets/images/deepika.jpg'},
    {name:'Akshay Kumar (Actor)',src:'assets/images/akshaykumar.webp'},
    {name:'Amish Tripathi (Author)',src:'assets/images/amish.jpg'},
    {name:'Robin Sharma (Author/Leadership)',src:'assets/images/robinsharma.webp'},
    {name:'Radhakrishnan Pillai (Author/Leadership)',src:'assets/images/rkpillai.webp'}
  ];

  spirutuals:any =[
    {name:'Ramana Maharshi (Great Soul & Guru)',src:'assets/images/ramana.jpg'},
    {name:'Gaur Gopal Das (Author/Spirutual)',src:'assets/images/ggdas.jpg'},
    {name:'Sadhguru (Author/Leadership/Yoga)',src:'assets/images/sadhguru.jpeg'},
    {name:'Chaganti Koteswara rao (Guru/Orator)',src:'assets/images/chaganti.jpeg'},
    {name:'Kamakshi (Goddess)',src:'assets/images/kamakshi.jpg'},
    {name:'Shiva (God)',src:'assets/images/shiva.jpg'},
    {name:'Ganapathi (God)',src:'assets/images/ganapathi.jpg'},
    {name:'Rajashyamala (Goddess)',src:'assets/images/rajashyamala.jpg'}
  ];

  hobbies:any=[
    {name:'Reading Books',src:'assets/images/books.svg'},
    {name:'Listening to Music',src:'assets/images/music.png'},
    {name:'Watching Movies',src:'assets/images/movies.png'},
    {name:'Petting Animals',src:'assets/images/petting.png'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
