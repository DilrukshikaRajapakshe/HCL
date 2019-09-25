import { Component, OnInit, NgModule } from '@angular/core';
import { ImageUploderCartComponent } from './image-uploder-cart/image-uploder-cart.component';
import { MatCardModule } from '@angular/material/card';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
@NgModule({
  declarations: [
    ImageUploderCartComponent
],
imports: [
    MatCardModule,
]
})
export class StudentPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
