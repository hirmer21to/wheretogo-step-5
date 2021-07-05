import { Component, OnInit, Input } from '@angular/core';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styles: []
})
export class LectureDetailsComponent implements OnInit {
  @Input() lecture: Lecture | undefined;

  constructor() { }

  ngOnInit() {
  }

}
