import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../model/course';
/*import {EventEmitter} from 'events';*/

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('card component - clicked');

    this.courseEmitter.emit(this.course);
  }

}
