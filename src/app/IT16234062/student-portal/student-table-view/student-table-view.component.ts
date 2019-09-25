import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-table-view',
  templateUrl: './student-table-view.component.html',
  styleUrls: ['./student-table-view.component.css']
})
export class StudentTableViewComponent implements OnInit {
  
  result=1;
  selectedValue:any;

  constructor(){}
  
  ngOnInit() {
    
    this.getSelectValue(this.selectedValue);
  }

  getSelectValue(selectedValue){
    if(selectedValue == null || selectedValue == 'select'){
      this.result = 1;
      // console.log(this.selectedValue);
      // console.log(this.result);
    }else if(selectedValue == 'Course'){
      this.result = 2;
      // console.log(this.selectedValue);
      // console.log(this.result);
    }else if(selectedValue == 'Personal'){
      this.result = 3;
      // console.log(this.selectedValue);
      // console.log(this.result);
    }else if(selectedValue == 'chart'){
      this.result = 4;
      // console.log(this.selectedValue);
      // console.log(this.result);
    }else{
      this.result = 1;
      // console.log(this.selectedValue);
      // console.log(this.selectedValue);
    }
  }
}
