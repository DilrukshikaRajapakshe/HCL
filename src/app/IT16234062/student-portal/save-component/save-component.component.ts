import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-save-component',
  templateUrl: './save-component.component.html',
  styleUrls: ['./save-component.component.css']
})
export class SaveComponentComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<SaveComponentComponent>) { }

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
