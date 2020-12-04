import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPozoComponent } from './crear-pozo.component';

describe('CrearPozoComponent', () => {
  let component: CrearPozoComponent;
  let fixture: ComponentFixture<CrearPozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPozoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
