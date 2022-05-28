import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupFormComponent } from './list-group-form.component';

describe('ListGroupFormComponent', () => {
  let component: ListGroupFormComponent;
  let fixture: ComponentFixture<ListGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
