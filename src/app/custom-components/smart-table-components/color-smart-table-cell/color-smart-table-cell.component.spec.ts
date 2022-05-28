import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSmartTableCellComponent } from './color-smart-table-cell.component';

describe('ColorSmartTableCellComponent', () => {
  let component: ColorSmartTableCellComponent;
  let fixture: ComponentFixture<ColorSmartTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSmartTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSmartTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
