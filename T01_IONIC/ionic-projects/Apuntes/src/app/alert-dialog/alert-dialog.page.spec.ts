import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertDialogPage } from './alert-dialog.page';

describe('AlertDialogPage', () => {
  let component: AlertDialogPage;
  let fixture: ComponentFixture<AlertDialogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
