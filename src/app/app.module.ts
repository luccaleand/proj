import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    PaginaClientesComponent,
    FormularioCadastroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
