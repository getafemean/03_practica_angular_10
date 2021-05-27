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
  showModal: boolean = false;
  id: string;

  constructor(private facturasService: FacturasService) { }

  ngOnInit(): void {
    this.waitingResponse = true;
    this.loadFacturas();
  }

  loadFacturas() {
    this.facturasService.getFacturas()
                        .subscribe((res: any) => {
                          this.waitingResponse = false;
                          this.facturas = res.facturas;
                        }, (err: any) => {
                          console.log(err);
                        })
  }

  deleteFactura(id: string) {
    this.facturasService.deleteFactura(id)
                        .subscribe((res: any) => {
                          this.loadFacturas();
                        }, (err: any) => {
                          console.log(err);
                        })
  }

  toggleModal(id?: string) {
    if(id) {
      this.id = id;
    }
    this.showModal = !this.showModal;
  }

  getAccion(event: boolean) {
    if(event) {
      this.deleteFactura(this.id);
    }
    this.toggleModal();
  }

}
