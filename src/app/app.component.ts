import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[1].description;

  price = 9.9569698;

  rate = 0.67;

  startDate = new Date(2000, 0, 1);

  /*coreCourse = COURSES[0];
  RxJsCourse = COURSES[1];
  NgRxCourse = COURSES[2];*/

  onCourseSelected(course: Course) {
    console.log('onCardClicked', course);
  }
}
