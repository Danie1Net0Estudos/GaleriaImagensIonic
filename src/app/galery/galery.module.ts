import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import { GaleryPage } from './galery.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GaleryPage }])
  ],
  declarations: [GaleryPage]
})
export class GaleryPageModule {}
