import { Component } from '@angular/core';

import { PhotoService } from '../shared/services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'galery.page.html',
  styleUrls: ['galery.page.scss']
})
export class GaleryPage {

  constructor(private photoService: PhotoService) { }

}
