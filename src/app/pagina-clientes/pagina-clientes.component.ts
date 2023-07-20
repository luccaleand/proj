import { Component } from '@angular/core';

interface Pessoa{
  ID:number;
  NOME:string;
  SOBRENOME:string;
  CPF:string;
  idade:number;
  ENDEREÇO:string;
}


@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
export class PaginaClientesComponent {
  pessoa:Pessoa[] = [
    {
        ID: 1,
        NOME: "João",
        SOBRENOME: "Silva",
        CPF: "123.456.789-00",
        idade: 30,
        ENDEREÇO: "Rua A, 123"
    },
    {
        ID: 2,
        NOME: "Maria",
        SOBRENOME: "Santos",
        CPF: "987.654.321-00",
        idade: 25,
        ENDEREÇO: "Avenida B, 456"
    },
    {
        ID: 3,
        NOME: "Pedro",
        SOBRENOME: "Ferreira",
        CPF: "111.222.333-44",
        idade: 28,
        ENDEREÇO: "Praça C, 789"
    }
  ];
  
}
