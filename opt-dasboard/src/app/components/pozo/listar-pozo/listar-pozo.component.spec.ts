import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPozoComponent } from './listar-pozo.component';

describe('ListarPozoComponent', () => {
  let component: ListarPozoComponent;
  let fixture: ComponentFixture<ListarPozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPozoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
