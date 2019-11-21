import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: SafeResourceUrl[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    const photo = this.domSanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

    this.photos.push(photo);
  }

}
