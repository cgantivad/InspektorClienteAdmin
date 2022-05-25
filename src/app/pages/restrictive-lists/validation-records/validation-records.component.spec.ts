import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRecordsComponent } from './validation-records.component';

describe('ValidationRecordsComponent', () => {
  let component: ValidationRecordsComponent;
  let fixture: ComponentFixture<ValidationRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
