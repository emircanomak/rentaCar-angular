import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailComponent } from './cars-detail.component';

describe('CarsDetailComponent', () => {
  let component: CarsDetailComponent;
  let fixture: ComponentFixture<CarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
