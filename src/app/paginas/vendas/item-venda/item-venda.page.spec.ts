import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemVendaPage } from './item-venda.page';

describe('ItemVendaPage', () => {
  let component: ItemVendaPage;
  let fixture: ComponentFixture<ItemVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
