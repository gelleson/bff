import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceShortComponent } from './balance-short.component';

describe('BalanceShortComponent', () => {
  let component: BalanceShortComponent;
  let fixture: ComponentFixture<BalanceShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
