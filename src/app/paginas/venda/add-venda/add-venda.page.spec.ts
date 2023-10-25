import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVendaPage } from './add-venda.page';

describe('AddVendaPage', () => {
  let component: AddVendaPage;
  let fixture: ComponentFixture<AddVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
