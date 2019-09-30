import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { Personal } from '../personal';
import { from } from 'rxjs';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentDetailsCadeUpdateComponent} from '../student-details-cade-update/student-details-cade-update.component';
import { DeleteComponentComponent } from '../delete-component/delete-component.component';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  displayedColumns: string[] = ['joinDate', 'image', 'id', 'name', 'email', 'mobile', 'pname', 'pmobile', 'address', 'actions'];
  dataSource : MatTableDataSource<Personal>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  personal: Personal[] = [
    {
      "joinDate": "2018.2.3",
      "image": "../../assets/img/a.jpg",
      "id": "1",
      "name": "Nadun",
      "email": "qw.q@.gmail.com",
      "mobile": "0778012319",
      "pname" : "Dinul",
      "pmobile" : "0778012319",
      "address" : "Gampha"
    }, {
      "joinDate": "2018.2.13",
      "image": "../../assets/img/b.jpg",
      "id": "2",
      "name": "kmale",
      "email": "qwq@gmail.com",
      "mobile": "0778012319",
      "pname" : "Dinul",
      "pmobile" : "0778012319",
      "address" : "Gampha"
    }, {
      "joinDate": "2018.2.23",
      "image": "../../assets/img/c.jpg",
      "id": "3",
      "name": "sunil",
      "email": "qwq@gmail.com",
      "mobile": "0778012319",
      "pname" : "Dinul",
      "pmobile" : "0778012319",
      "address" : "Gampha"
    },
    {
      "joinDate": "2018.2.1",
      "image": "../../assets/img/d.jpg",
      "id": "4",
      "name": "Nipun",
      "email": "qwq@gmail.com",
      "mobile": "0778012319",
      "pname" : "Dinul",
      "pmobile" : "0778012319",
      "address" : "Gampha"
    },
    {
      "joinDate": "2018.2.6",
      "image": "../../assets/img/e.jpg",
      "id": "5",
      "name": "Kavinga",
      "email": "qwq@gmail.com",
      "mobile": "0778012319",
      "pname" : "Dinul",
      "pmobile" : "0778012319",
      "address" : "Gampha"
    },
    {
      "joinDate": "2018.2.14",
      "image": "../../assets/img/f.jpg",
      "id": "6",
      "name": "Ishara",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.25",
      "image": "../../assets/img/g.jpg",
      "id": "7",
      "name": "Dilshan",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    }, {
      "joinDate": "2018.2.19",
      "image": "../../assets/img/h.jpg",
      "id": "8",
      "name": "Ruvini",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    }, {
      "joinDate": "2018.2.7",
      "image": "../../assets/img/i.jpg",
      "id": "9",
      "name": "Saduni",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.10",
      "image": "../../assets/img/j.jpg",
      "id": "10",
      "name": "Himaya",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.19",
      "image": "../../assets/img/k.jpg",
      "id": "11",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.18",
      "image": "../../assets/img/l.jpg",
      "id": "12",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.19",
      "image": "../../assets/img/m.jpg",
      "id": "13",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    }, {
      "joinDate": "2018.2.28",
      "image": "../../assets/img/n.jpg",
      "id": "14",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    }, {
      "joinDate": "2018.2.17",
      "image": "../../assets/img/o.jpg",
      "id": "15",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.21",
      "image": "../../assets/img/p.jpg",
      "id": "16",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.11",
      "image": "../../assets/img/a.jpg",
      "id": "17",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.22",
      "image": "../../assets/img/q.jpg",
      "id": "18",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.19",
      "image": "../../assets/img/r.jpg",
      "id": "19",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    },
    {
      "joinDate": "2018.2.13",
      "image": "../../assets/img/s.jpg",
      "id": "20",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "pname" : "string",
      "pmobile" : "string",
      "address" : "string"
    }
  ];
  
  

  constructor(
    private dialog :MatDialog,
    // 
  ) {
    this.dataSource = new MatTableDataSource(this.personal);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    console.log(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "80%";
    this.dialog.open(StudentDetailsCadeUpdateComponent,dialogConfig);

  }

  DeleteRowClicked(row: any): void{
    console.log(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "58%";
    this.dialog.open(DeleteComponentComponent,dialogConfig);

  }

}


