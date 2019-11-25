import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GaleryPage } from './galery.page';
import { PhotoService } from '../shared/services/photo.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GaleryPage }]),
    HttpClientModule
  ],
  declarations: [GaleryPage],
  providers: [PhotoService]
})
export class GaleryPageModule {}
