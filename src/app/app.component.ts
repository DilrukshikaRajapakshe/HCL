import { Component, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ImageUploderCartComponent } from './IT16234062/student-portal/image-uploder-cart/image-uploder-cart.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentTableComponent} from './IT16234062/student-portal/student-table/student-table.component';

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
entryComponents: [StudentTableComponent],
bootstrap: [StudentTableComponent],
providers: []
})
export class AppComponent {
  title = 'WPC-app';
}
