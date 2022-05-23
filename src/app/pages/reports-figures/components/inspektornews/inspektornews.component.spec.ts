/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InspektornewsComponent } from './inspektornews.component';

describe('InspektornewsComponent', () => {
  let component: InspektornewsComponent;
  let fixture: ComponentFixture<InspektornewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspektornewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspektornewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
