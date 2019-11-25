import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { CameraPhoto, CameraResultType, CameraSource, Plugins } from '@capacitor/core';

import { environment } from '../../../environments/environment';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[] = [];

  constructor(
    private domSanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) { }

  async takePicture() {
    const options = {
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    };

    const image = await Plugins.Camera.getPhoto(options);

    this.photos.push({
      image,
      loaded: false
    });
  }

  getPhoto(image: CameraPhoto): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }

  getPhotos(): SafeResourceUrl[] {
    return this.photos;
  }

  lengthPhotos(): number {
    return this.photos.length;
  }

  async upload() {
    const formData = new FormData();

    for (const photo of this.photos) {
      const blob = await fetch(photo.image.webPath).then(response => response.blob());
      if (!photo.loaded) {
        formData.append('file', blob, `image.${photo.image.format}`);
        photo.loaded = true;
      }
    }

    return this.httpClient.post(`${ environment.API_URL }uploads`, formData).pipe(take(1));
  }

  delete(position): void {
    this.photos.splice(position, 1);
  }

}
