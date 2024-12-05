import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentesPage } from './componentes.page';

describe('ComponentesPage', () => {
  let component: ComponentesPage;
  let fixture: ComponentFixture<ComponentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
