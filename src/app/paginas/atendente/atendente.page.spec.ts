import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtendentePage } from './atendente.page';

describe('AtendentePage', () => {
  let component: AtendentePage;
  let fixture: ComponentFixture<AtendentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
