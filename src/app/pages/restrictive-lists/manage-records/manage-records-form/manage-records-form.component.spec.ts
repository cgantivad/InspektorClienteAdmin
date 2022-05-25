import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecordsFormComponent } from './manage-records-form.component';

describe('ManageRecordsFormComponent', () => {
  let component: ManageRecordsFormComponent;
  let fixture: ComponentFixture<ManageRecordsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRecordsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRecordsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
