import { Component, OnInit, NgModule } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})

@NgModule({
  declarations: [
    DeleteComponentComponent
],
imports: [
    MatCardModule
]
})

export class DeleteComponentComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<DeleteComponentComponent>) { }
  
  ngOnInit() {

  }

  closeWindow(){
    this.dialogRef.close();
    console.log("close");
  }

}
