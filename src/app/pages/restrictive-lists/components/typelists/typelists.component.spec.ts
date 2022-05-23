/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypelistsComponent } from './typelists.component';

describe('TypelistsComponent', () => {
  let component: TypelistsComponent;
  let fixture: ComponentFixture<TypelistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypelistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
