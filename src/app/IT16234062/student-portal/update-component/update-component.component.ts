import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<UpdateComponentComponent>) { }

  ngOnInit() {
  }
  closeWindow(){
    this.dialogRef.close();
    console.log("close");
  }

  save( id){
    
    this.dialogRef.close();
  }
}
