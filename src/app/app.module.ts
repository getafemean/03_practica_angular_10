import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NumeroPipe } from './pipes/numero.pipe';
import { ActualizarFacturaComponent } from './facturas/actualizar-factura/actualizar-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearFacturaComponent,
    ListadoFacturasComponent,
    SpinnerComponent,
    NumeroPipe,
    ActualizarFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
