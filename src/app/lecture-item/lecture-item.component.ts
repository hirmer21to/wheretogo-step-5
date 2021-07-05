import { Component, OnInit, Input } from '@angular/core';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'a.app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styles: []
})
export class LectureItemComponent implements OnInit {
  @Input() lecture: Lecture | undefined;

  constructor() { }

  ngOnInit() {
  }

}
