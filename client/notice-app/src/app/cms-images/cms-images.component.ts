import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cms-images',
  templateUrl: './cms-images.component.html',
  styleUrls: ['./cms-images.component.css']
})
export class CmsImagesComponent {

  constructor(http: HttpClient, api: ApiService){
    http.get('http://localhost:3000/').subscribe((data: any) => {
      debugger
    });
  }

  addImage() {
    debugger
  }

  //NOTE: upload image to amazon s3 buckets
  uploadImage() {

  }

  //NOTE: hit backend to return qr code
  getQRCode() {
  }
}
