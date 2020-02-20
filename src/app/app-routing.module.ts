import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { TechProfilesComponent } from './tech-profiles/tech-profiles.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "personalDetails", component: PersonalDetailsComponent},
  {path: "professioanlDetails", component: ProDetailsComponent},
  {path: "otherProfiles", component: TechProfilesComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'*.*',redirectTo:'/home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
