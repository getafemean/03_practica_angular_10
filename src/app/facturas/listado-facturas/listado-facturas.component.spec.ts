import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFacturasComponent } from './listado-facturas.component';

describe('ListadoFacturasComponent', () => {
  let component: ListadoFacturasComponent;
  let fixture: ComponentFixture<ListadoFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
