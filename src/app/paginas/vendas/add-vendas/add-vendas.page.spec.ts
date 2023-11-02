import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVendasPage } from './add-vendas.page';

describe('AddVendasPage', () => {
  let component: AddVendasPage;
  let fixture: ComponentFixture<AddVendasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
