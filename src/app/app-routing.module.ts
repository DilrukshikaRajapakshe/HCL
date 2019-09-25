import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPortalComponent } from './IT16234062/student-portal/student-portal.component';
import {PersonalInformationComponent  } from './IT16234062/student-portal/personal-information/personal-information.component';
import { CourseInformationComponent } from './IT16234062/student-portal/course-information/course-information.component';
import { StudentTableViewComponent } from './IT16234062/student-portal/student-table-view/student-table-view.component';


const routes: Routes = [
  {
    path: "StudentPortal",
    component: StudentPortalComponent,
    children: [
      {
          path: 'PersonalInformation',
          component: PersonalInformationComponent
      },
      {
          path: 'CourseInformation',
          component: CourseInformationComponent
      },
      {
          path: 'StudentTableView',
          component: StudentTableViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  

}
