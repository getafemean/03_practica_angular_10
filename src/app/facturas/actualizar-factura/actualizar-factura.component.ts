import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from 'src/app/servicios/facturas.service';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-actualizar-factura',
  templateUrl: './actualizar-factura.component.html',
  styleUrls: ['./actualizar-factura.component.scss']
})
export class ActualizarFacturaComponent implements OnInit {

  id: string;
  formFactura: FormGroup;
  waitingResponse: boolean = false;
  user: string = 'Juan Pérez';

  constructor(private facturasService: FacturasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
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
    this.facturasService.getFacturaId(this.id)
                        .subscribe((res: any) => {
                          this.formFactura.get('cliente').patchValue(res.factura.cliente);  
                          this.formFactura.get('cif').patchValue(res.factura.cif);  
                          this.formFactura.get('fechaFactura').patchValue((new Date(res.factura.fechaFactura)).toISOString().substring(0,10));  
                          this.formFactura.get('baseImponible').patchValue(res.factura.baseImponible);  
                          this.formFactura.get('tipoIVA').patchValue(res.factura.tipoIVA);  
                        }, (err: any) => {
                          console.log(err);
                        })
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
      tipoIVA: this.formFactura.get('tipoIVA').value
    };
    this.waitingResponse = true;
    this.facturasService.putFactura(this.id, factura)
                        .subscribe((res: any) => {
                          this.waitingResponse = false;
                          this.router.navigate(['/']);
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}
