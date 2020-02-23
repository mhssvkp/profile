import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PersonalDetailsComponent } from './views/personal-details/personal-details.component';
import { ProDetailsComponent } from './views/pro-details/pro-details.component';
import { TechProfilesComponent } from './views/tech-profiles/tech-profiles.component';

// {path: "about", component: AboutComponent},
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "personalDetails", component: PersonalDetailsComponent },
  { path: "professioanlDetails", component: ProDetailsComponent },
  { path: "otherProfiles", component: TechProfilesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
