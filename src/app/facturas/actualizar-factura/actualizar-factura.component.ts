import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from 'src/app/servicios/facturas.service';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-actualizar-factura',
  templateUrl: './actualizar-factura.component.html',
  styleUrls: ['./actualizar-factura.component.scss']
})
export class ActualizarFacturaComponent implements OnInit {

  formFactura: FormGroup;
  waitingResponse: boolean = false;
  user: string = 'Juan Pérez';

  constructor(private facturasService: FacturasService,
              private router: Router) { }

  ngOnInit(): void {
    this.formFactura = new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [ValidateCif]),
      fechaFactura: new FormControl((new Date()).toISOString().substring(0,10)),
      baseImponible: new FormControl(0),
      tipoIVA: new FormControl(0.21),
      importeIVA: new FormControl(0),
      totalFactura: new FormControl(0)
    })
    this.actualizarFactura();
  }

  actualizarFactura() {
    this.formFactura.valueChanges
                    .subscribe(objetoForm => {
                      this.formFactura.get('importeIVA')
                                      .patchValue(objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false})
                      this.formFactura.get('totalFactura')
                                      .patchValue(objetoForm.baseImponible + objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false})
                    })
  }

  updateFactura() {
    let factura: Factura = {
      cliente: this.formFactura.get('cliente').value,
      cif: this.formFactura.get('cif').value,
      fechaFactura: new Date(this.formFactura.get('fechaFactura').value),
      baseImponible: this.formFactura.get('baseImponible').value,
      tipoIVA: this.formFactura.get('tipoIVA').value,
      user: this.user
    };
    this.waitingResponse = true;
    this.facturasService.postFactura(factura)
                        .subscribe((res: any) => {
                          this.waitingResponse = false;
                          this.router.navigate(['/']);
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}