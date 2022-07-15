import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSmartTableCellComponent } from './checkbox-smart-table-cell.component';

describe('CheckboxSmartTableCellComponent', () => {
  let component: CheckboxSmartTableCellComponent;
  let fixture: ComponentFixture<CheckboxSmartTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxSmartTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSmartTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
