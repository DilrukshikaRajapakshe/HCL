import { Component, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ImageUploderCartComponent } from './IT16234062/student-portal/image-uploder-cart/image-uploder-cart.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentTableComponent} from './IT16234062/student-portal/student-table/student-table.component';
import { DeleteComponentComponent } from './IT16234062/student-portal/delete-component/delete-component.component';
import { StudentDetailsCadeUpdateComponent } from './IT16234062/student-portal/student-details-cade-update/student-details-cade-update.component';
import { UpdateComponentComponent } from './IT16234062/student-portal/update-component/update-component.component';
import { SaveComponentComponent } from './IT16234062/student-portal/save-component/save-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [
    ImageUploderCartComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
],
imports: [
    MatCardModule
],
entryComponents: [
  StudentDetailsCadeUpdateComponent,
  DeleteComponentComponent,
  UpdateComponentComponent,
  SaveComponentComponent
],
bootstrap: [
  StudentTableComponent
],
providers: []
})
export class AppComponent {
  title = 'WPC-app';
  showFiller = false;
}
