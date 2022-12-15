import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAddComponent } from './brands-add.component';

describe('BrandsAddComponent', () => {
  let component: BrandsAddComponent;
  let fixture: ComponentFixture<BrandsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
