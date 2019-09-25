import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-student-details-cade-update',
  templateUrl: './student-details-cade-update.component.html',
  styleUrls: ['./student-details-cade-update.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})

@NgModule({
  declarations: [
    StudentDetailsCadeUpdateComponent
],
imports: [
    MatCardModule
]
})

export class StudentDetailsCadeUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef : MatDialogRef<StudentDetailsCadeUpdateComponent>) { this.createForm(); }

  ngOnInit() {
  }
  date = new FormControl(moment([2017, 0, 1]));
  angForm: FormGroup;
  a='^[A-Za-z]*$';
  d='^[0-9]{10}$';
  b='^IT[0-9]{8}$';
  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required,Validators.pattern(this.b)],
      name: ['', Validators.required,Validators.pattern(this.a)],
      date: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      Mobile: ['', Validators.required, Validators.pattern(this.d)],
      Pname: ['', Validators.required, Validators.pattern(this.a)],
      PMobile: ['', Validators.required, Validators.pattern(this.d)],
      Address: ['', Validators.required, Validators.pattern(this.a)]
    });
  }

  //angForm.value=null
  closeWindow(){
    this.dialogRef.close();
    console.log("close");
  }

  save( id){
    
    this.dialogRef.close();
  }
}
