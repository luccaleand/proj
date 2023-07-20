import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClientesComponent } from './pagina-clientes.component';

describe('PaginaClientesComponent', () => {
  let component: PaginaClientesComponent;
  let fixture: ComponentFixture<PaginaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaClientesComponent]
    });
    fixture = TestBed.createComponent(PaginaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
