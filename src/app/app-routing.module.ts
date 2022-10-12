import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path:'observable', component:ObservableComponent,children:[
    {path:'', component:AllComponent},
    {path:'from-event', component:FromeventComponent},
    {path:'map', component:MapComponent},
    {path:'filter', component:FilterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
