import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.scss']
})
export class ListadoFacturasComponent implements OnInit {

  facturas: Array<Factura>;
  waitingResponse: boolean = false;

  constructor(private facturasService: FacturasService) { }

  ngOnInit(): void {
    this.waitingResponse = true;
    this.facturasService.getFacturas()
                        .subscribe((res: any) => {
                          this.waitingResponse = false;
                          this.facturas = res.facturas;
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}
