import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SaveComponentComponent } from '../save-component/save-component.component';
@Component({
  selector: 'app-course-details-cade2-component',
  templateUrl: './course-details-cade2-component.component.html',
  styleUrls: ['./course-details-cade2-component.component.css']
})
export class CourseDetailsCade2ComponentComponent implements OnInit {
  a='^IT[0-9]{8}$';
  b='^[A-Za-z]*$';
  d='^[A-Za-z]*$';
  e='^[0-9]+(\.[0-9]{1,2})?$';
  f='^[0-9]+(\.[0-9]{1,2})?$';
  data:any;
  
  angForm1: FormGroup;
  constructor(private fb: FormBuilder,private dialog :MatDialog) { this.createForm1(); }

  ngOnInit() {
  }

  cal(txtCourseFree,txtFee ){
    const s = parseFloat(txtCourseFree)-parseFloat(txtFee);
    this.data = s + ".00"
    console.log(this.data);
  }
  createForm1() {
      this.angForm1 = this.fb.group({
      txtCourseFree: ['', Validators.required, Validators.pattern(this.e)],
      txtFee: ['', Validators.required, Validators.pattern(this.f)]
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
