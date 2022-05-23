import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeFormComponent } from './list-type-form.component';

describe('ListTypeFormComponent', () => {
  let component: ListTypeFormComponent;
  let fixture: ComponentFixture<ListTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
