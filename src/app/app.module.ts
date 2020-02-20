import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { TechProfilesComponent } from './tech-profiles/tech-profiles.component';
import { TimelineViewHomeComponent } from './timeline-view-home/timeline-view-home.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
