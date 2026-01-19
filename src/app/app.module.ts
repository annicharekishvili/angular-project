import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { PersonEditComponent } from './list/person-edit/person-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAddressComponent } from './list/person-edit/edit-address/edit-address.component';
import { Observer1Component } from './observables/observer1/observer1.component';
import { Observer2Component } from './observables/observer2/observer2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    SubHeaderComponent,
    PersonEditComponent,
    EditAddressComponent,
    Observer1Component,
    Observer2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
