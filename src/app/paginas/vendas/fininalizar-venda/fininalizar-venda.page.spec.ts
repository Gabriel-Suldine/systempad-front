import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FininalizarVendaPage } from './fininalizar-venda.page';

describe('FininalizarVendaPage', () => {
  let component: FininalizarVendaPage;
  let fixture: ComponentFixture<FininalizarVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FininalizarVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
