import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NumeroPipe } from './pipes/numero.pipe';
import { ActualizarFacturaComponent } from './facturas/actualizar-factura/actualizar-factura.component';
import { ModalComponent } from './modal/modal.component';
import { FadeLoadDirective } from './fade-load.directive';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearFacturaComponent,
    ListadoFacturasComponent,
    SpinnerComponent,
    NumeroPipe,
    ActualizarFacturaComponent,
    ModalComponent,
    FadeLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
