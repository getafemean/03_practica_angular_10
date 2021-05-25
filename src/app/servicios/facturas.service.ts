import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private facturaEndpoint = 'http://localhost:4040/facturas';

  constructor(private http: HttpClient) { }

  postFactura(factura: any):any {
    return this.http.post(this.facturaEndpoint, factura)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }


}
