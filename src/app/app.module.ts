import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewcomponentComponent } from './viewchild/viewcomponent/viewcomponent.component';
import { TestDirectiveDirective } from './directives/test-directive.directive';
import { CustomPipesComponent } from './pipes/custom-pipes/custom-pipes.component';
import {UxPipes} from '../app/pipes/custom-pipes/custom.pipes';
import { FilterPipe } from './pipes/filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { ManageProductComponent } from './manage_product/manage-product/manage-product.component'; 

import { HttpClientModule, } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { MapComponent } from './observable/map/map.component';
import { FilterComponent } from './observable/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ViewchildComponent,
    ViewcomponentComponent,
    TestDirectiveDirective,
    CustomPipesComponent,UxPipes, FilterPipe, ManageProductComponent, UserComponent, ObservableComponent, AllComponent, FromeventComponent, MapComponent, FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
