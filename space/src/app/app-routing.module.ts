import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { ExploreComponent } from './explore/explore.component';
import { TECHNOLOGYComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full'
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'destination',
    component:DestinationComponent

  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'technology',
    component: TECHNOLOGYComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
