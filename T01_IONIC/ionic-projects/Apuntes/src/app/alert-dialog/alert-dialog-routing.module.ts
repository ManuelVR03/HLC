import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDialogPage } from './alert-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDialogPageRoutingModule {}
