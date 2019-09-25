import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageUploderCartComponent } from './IT16234062/student-portal/image-uploder-cart/image-uploder-cart.component';
import { MatCardModule } from '@angular/material/card';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {StudentDetailsCadeComponent } from './IT16234062/student-portal/student-details-cade/student-details-cade.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CourseDetailsCadeComponent } from './IT16234062/student-portal/course-details-cade/course-details-cade.component';
import { CourseDetailsTableComponent } from './IT16234062/student-portal/course-details-table/course-details-table.component';
import { StudentDetailsTableComponent } from './IT16234062/student-portal/student-details-table/student-details-table.component';
import { StudentTableComponent } from './IT16234062/student-portal/student-table/student-table.component';
import { StudentTableSelectorComponent } from './IT16234062/student-portal/student-table-selector/student-table-selector.component';
import { StudentTableViewComponent } from './IT16234062/student-portal/student-table-view/student-table-view.component';
import { SubNavComponent } from './IT16234062/student-portal/sub-nav/sub-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { PersonalInformationComponent } from './IT16234062/student-portal/personal-information/personal-information.component';
import { CourseInformationComponent } from './IT16234062/student-portal/course-information/course-information.component';
import { StudentPortalComponent } from './IT16234062/student-portal/student-portal.component';
import { WellcomeMassageOfTableComponent } from './IT16234062/student-portal/wellcome-massage-of-table/wellcome-massage-of-table.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { StudentDetailsCadeUpdateComponent } from './IT16234062/student-portal/student-details-cade-update/student-details-cade-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPortalComponent,
    ImageUploderCartComponent,
    StudentDetailsCadeComponent,
    CourseDetailsCadeComponent,
    CourseDetailsTableComponent,
    StudentDetailsTableComponent,
    StudentTableComponent,
    StudentTableSelectorComponent,
    StudentTableViewComponent,
    SubNavComponent,
    PersonalInformationComponent,
    CourseInformationComponent,
    WellcomeMassageOfTableComponent,
    StudentDetailsCadeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FlexLayoutModule,
    BrowserModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  entryComponents:[
    CourseDetailsCadeComponent,
    StudentDetailsCadeUpdateComponent
  ]
})
export class AppModule { }
