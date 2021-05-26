import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private facturaEndpoint = environment.urlAPI + '/facturas';

  constructor(private http: HttpClient) { }

  getFacturas(): any {
    return this.http.get(this.facturaEndpoint)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

  getFacturaId(id: string): any {
    return this.http.get(this.facturaEndpoint + `/${id}`)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

  postFactura(factura: Factura):any {
    return this.http.post(this.facturaEndpoint, factura)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

  putFactura(id, factura: Factura):any {
    return this.http.put(this.facturaEndpoint + `/${id}`, factura)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }


}
