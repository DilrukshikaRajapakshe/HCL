import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-course-details-cade',
  templateUrl: './course-details-cade.component.html',
  styleUrls: ['./course-details-cade.component.css']
})
export class CourseDetailsCadeComponent implements OnInit {
  a='^IT[0-9]{8}$';
  b='^[A-Za-z]*$';
  d='^[A-Za-z]*$';
  e='^[0-9]+(\.[0-9]{1,2})?$';
  f='^[0-9]+(\.[0-9]{1,2})?$';
 
  angForm: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm(); }
  
  data:any;
  ngOnInit() {
   
  }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required,Validators.pattern(this.a)],
      txtClass: ['', Validators.required, Validators.pattern(this.b)],
      txtCourse: ['', Validators.required],
      txtTecher: ['', Validators.required, Validators.pattern(this.d)],
      txtCourseFree: ['', Validators.required, Validators.pattern(this.e)],
      txtFee: ['', Validators.required, Validators.pattern(this.f)]
    });
  }

  cal(txtCourseFree,txtFee ){
    const s = parseFloat(txtCourseFree)-parseFloat(txtFee);
    this.data = s + ".00"
    console.log(this.data);
  }

  
}
