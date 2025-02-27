import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCompComponent } from './students-comp.component';

describe('StudentsCompComponent', () => {
  let component: StudentsCompComponent;
  let fixture: ComponentFixture<StudentsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
