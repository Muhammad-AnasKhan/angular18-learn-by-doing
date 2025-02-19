import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChangeDetectionComponent } from './ng-change-detection.component';

describe('NgChangeDetectionComponent', () => {
  let component: NgChangeDetectionComponent;
  let fixture: ComponentFixture<NgChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
