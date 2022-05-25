import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictiveListsComponent } from './restrictive-lists.component';

describe('RestrictiveListsComponent', () => {
  let component: RestrictiveListsComponent;
  let fixture: ComponentFixture<RestrictiveListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictiveListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictiveListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
