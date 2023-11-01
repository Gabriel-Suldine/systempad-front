import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProdutosPage } from './add-produtos.page';

describe('AddProdutosPage', () => {
  let component: AddProdutosPage;
  let fixture: ComponentFixture<AddProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 