import { Injectable } from '@angular/core';
import { Lecture } from './lecture';
import { LECTURES } from './mock-lectures';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor() { }

  getLectures(): Observable<Lecture[]> {
    return of (LECTURES);
  }
}
