import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { PhotoService } from '../shared/services/photo.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'galery.page.html',
  styleUrls: ['galery.page.scss']
})
export class GaleryPage {

  constructor(
    private photoService: PhotoService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async upload() {
    const loading = await this.loadingController.create({
      message: 'Enviando Imagem...',
    });
    await loading.present();

    const toast = await this.toastController.create({
      message: 'Upload realizado com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });

    (await this.photoService.upload())
      .pipe(
        finalize(() => loading.dismiss()),
      )
      .subscribe(response => toast.present());
  }

}
