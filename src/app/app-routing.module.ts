import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HomeComponent } from './home/home.component';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"cadastro", component: FormularioCadastroComponent},
  {path:"clientes", component: PaginaClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
