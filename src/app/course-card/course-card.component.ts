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

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log('card component - clicked');

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    // tslint:disable-next-line:triple-equals
    if (this.course.category == 'BEGINNER'){
      return ['beginner'];
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')',
    };
  }

}
