import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviourSubjectComponent } from './subject-behaviour-subject.component';

describe('SubjectBehaviourSubjectComponent', () => {
  let component: SubjectBehaviourSubjectComponent;
  let fixture: ComponentFixture<SubjectBehaviourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectBehaviourSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
