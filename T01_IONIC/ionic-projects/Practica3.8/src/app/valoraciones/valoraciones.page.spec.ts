import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValoracionesPage } from './valoraciones.page';

describe('ValoracionesPage', () => {
  let component: ValoracionesPage;
  let fixture: ComponentFixture<ValoracionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
