import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealitimComponent } from './realitim.component';

describe('RealitimComponent', () => {
  let component: RealitimComponent;
  let fixture: ComponentFixture<RealitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealitimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
