import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: []
})
export class TimetableComponent implements OnInit {
  lectures: Lecture[] = [];
  selectedLecture: Lecture = {id: 0, name:'', room:'', day:'', time: {hours: 0, minutes: 0}, building:'', floor:''};

  onSelect(lecture: Lecture): void {
    this.selectedLecture = lecture;
  }

  constructor(private lectureService: LectureService) { }

  ngOnInit() {
    this.getLectures();
  }

  getLectures(): void {
    this.lectureService.getLectures()
    .subscribe(lectures => this.lectures = lectures);
  }

}
