import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAtendentesPage } from './add-atendentes.page';

describe('AddAtendentesPage', () => {
  let component: AddAtendentesPage;
  let fixture: ComponentFixture<AddAtendentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAtendentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
