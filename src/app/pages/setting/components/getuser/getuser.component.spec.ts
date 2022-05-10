/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetuserComponent } from './getuser.component';

describe('GetuserComponent', () => {
  let component: GetuserComponent;
  let fixture: ComponentFixture<GetuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
