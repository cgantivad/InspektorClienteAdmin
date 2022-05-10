/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetLogComponent } from './get-log.component';

describe('GetLogComponent', () => {
  let component: GetLogComponent;
  let fixture: ComponentFixture<GetLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
