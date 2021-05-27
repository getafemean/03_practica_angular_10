import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NumeroPipe } from 'src/app/pipes/numero.pipe';

import { CrearFacturaComponent } from './crear-factura.component';

describe('Test unitario del Componente Crear Factura', () => {
  let component: CrearFacturaComponent;
  let fixture: ComponentFixture<CrearFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ CrearFacturaComponent, NumeroPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se debería crear', () => {
    expect(component).toBeTruthy();
  });

  it('Contiene los campos del objeto Factura', () => {
    expect(component.formFactura.contains('cliente')).toBeTruthy();
    expect(component.formFactura.contains('cif')).toBeTruthy();
    expect(component.formFactura.contains('fechaFactura')).toBeTruthy();
    expect(component.formFactura.contains('baseImponible')).toBeTruthy();
    expect(component.formFactura.contains('tipoIVA')).toBeTruthy();
  })

  it('Campo cliente es requerido', () => {
    const control = component.formFactura.get('cliente');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

});
