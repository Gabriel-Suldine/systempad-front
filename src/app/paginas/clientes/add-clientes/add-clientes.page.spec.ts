import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddClientesPage } from './add-clientes.page';

describe('AddClientesPage', () => {
  let component: AddClientesPage;
  let fixture: ComponentFixture<AddClientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
