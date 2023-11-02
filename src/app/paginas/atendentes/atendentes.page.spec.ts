import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtendentesPage } from './atendentes.page';

describe('AtendentesPage', () => {
  let component: AtendentesPage;
  let fixture: ComponentFixture<AtendentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtendentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
