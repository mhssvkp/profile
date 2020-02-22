import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProDetailsComponent } from './views/pro-details/pro-details.component';
import { PersonalDetailsComponent } from './views/personal-details/personal-details.component';
import { TechProfilesComponent } from './views/tech-profiles/tech-profiles.component';
import { TimelineViewHomeComponent } from './components/timeline-view-home/timeline-view-home.component';
import { TechDetailsComponent } from './components/tech-details/tech-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ProDetailsComponent,
    PersonalDetailsComponent,
    TechProfilesComponent,
    TimelineViewHomeComponent,
    TechDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
