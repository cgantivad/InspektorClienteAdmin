import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListsFormComponent } from './group-lists-form.component';

describe('GroupListsFormComponent', () => {
  let component: GroupListsFormComponent;
  let fixture: ComponentFixture<GroupListsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupListsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
