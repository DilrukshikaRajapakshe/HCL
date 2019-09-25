import { Component, OnInit, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-image-uploder-cart',
  templateUrl: './image-uploder-cart.component.html',
  styleUrls: ['./image-uploder-cart.component.css']
})
@NgModule({
  declarations: [
    ImageUploderCartComponent
],
imports: [
    MatCardModule
]
})
export class ImageUploderCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
