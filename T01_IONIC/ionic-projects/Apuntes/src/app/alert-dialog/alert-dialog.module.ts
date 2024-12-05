import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDialogPageRoutingModule } from './alert-dialog-routing.module';

import { AlertDialogPage } from './alert-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDialogPageRoutingModule
  ],
  declarations: [AlertDialogPage]
})
export class AlertDialogPageModule {}
