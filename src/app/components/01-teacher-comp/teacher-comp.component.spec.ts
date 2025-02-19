import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCompComponent } from './teacher-comp.component';

describe('TeacherCompComponent', () => {
  let component: TeacherCompComponent;
  let fixture: ComponentFixture<TeacherCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
