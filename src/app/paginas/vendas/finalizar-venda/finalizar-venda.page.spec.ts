import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalizarVendaPage } from './finalizar-venda.page';

describe('FinalizarVendaPage', () => {
  let component: FinalizarVendaPage;
  let fixture: ComponentFixture<FinalizarVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinalizarVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
