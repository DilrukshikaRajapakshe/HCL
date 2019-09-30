import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SaveComponentComponent } from '../save-component/save-component.component';
@Component({
  selector: 'app-student-details-cade',
  templateUrl: './student-details-cade.component.html',
  styleUrls: ['./student-details-cade.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class StudentDetailsCadeComponent implements OnInit {

  constructor(private fb: FormBuilder,private dialog :MatDialog) { this.createForm(); }

  ngOnInit() {
  }
  date = new FormControl(moment([2017, 0, 1]));
  angForm: FormGroup;
  a='^[A-Za-z]*$';
  d='^[0-9]{10}$';

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required,Validators.pattern(this.a)],
      date: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      Mobile: ['', Validators.required, Validators.pattern(this.d)],
      Pname: ['', Validators.required, Validators.pattern(this.a)],
      PMobile: ['', Validators.required, Validators.pattern(this.d)],
      Address: ['', Validators.required, Validators.pattern(this.a)]
    });
  }
  DeleteRowClicked(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "50%";
    this.dialog.open(SaveComponentComponent,dialogConfig);

  }
}
