import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditClientePage } from './edit-cliente.page';

describe('EditClientePage', () => {
  let component: EditClientePage;
  let fixture: ComponentFixture<EditClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
