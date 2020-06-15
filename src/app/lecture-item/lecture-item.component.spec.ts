import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureItemComponent } from './lecture-item.component';

describe('LectureItemComponent', () => {
  let component: LectureItemComponent;
  let fixture: ComponentFixture<LectureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
