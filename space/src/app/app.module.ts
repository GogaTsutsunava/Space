import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExploreComponent } from './explore/explore.component';
import { DestinationComponent } from './destination/destination.component';
import { FormsModule } from '@angular/forms';
import { CrewComponent } from './crew/crew.component';
import { TECHNOLOGYComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    ExploreComponent,
    DestinationComponent,
    CrewComponent,
    TECHNOLOGYComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
