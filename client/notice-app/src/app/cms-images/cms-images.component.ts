import { Component, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-images',
  templateUrl: './cms-images.component.html',
  styleUrls: ['./cms-images.component.css']
})
export class CmsImagesComponent {
  private http: HttpClient;
  private sanitizer: DomSanitizer;
  public demo: any;

  constructor(
    http: HttpClient, 
    api: ApiService,
    sanitizer: DomSanitizer){
    this.http = http;
    this.sanitizer = sanitizer;
  }

  //NOTE: upload image to amazon s3 buckets
  uploadImage() {
  }

  //NOTE: hit backend to return qr code
  //getQRCode():string {
  public getQRCode() {
    //this.http.post('http://localhost:3000/', 'https://youtube.com').subscribe((data: any) => {
    //});
    var qrcode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOnSURBVO3BQa5bRwADweZA979yx4ssuBrgQdKP7bAq/sLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlxZuS8JNUWhKaSktCU2lJaCotCU3liST8JJV3HGbKYaYcZsqLD1P5pCTcqLQkvCMJTyShqdyofFISPukwUw4z5TBTXnxZEp5QeSIJTeUmCU+ofFMSnlD5psNMOcyUw0x58YdTaUm4UWlJuElCU2kqf5PDTDnMlMNMefGXU3lCpSXh/+QwUw4z5TBTXnyZyjcloancJKGp/JdUfieHmXKYKYeZ8uLDkvA7SUJTaUloKk8koancJOF3dpgph5lymCnxF/4iSbhReSIJT6j8yQ4z5TBTDjPlxZuS0FRaEprKE0m4UWkqLQlPJOFGpSXhiSQ0lZskNJWWhKbyjsNMOcyUw0x58cOScKPSVD4pCU3lRqUloancJOGJJDSVloRvOsyUw0w5zJQXb1J5QuUmCTcqN0m4UWlJaCqfpHKThJskNJWWhE86zJTDTDnMlBcfloSm0pLQVG5UPikJTaUloak0lZaEJ1SeULlR+aTDTDnMlMNMefGmJDSVloSmcqPSktBUWhJuVG6S8EQSblRaEm5U3pGEpvKOw0w5zJTDTHnxJpUblZsk3Ki0JHyTyjuScJOEpvJEEr7pMFMOM+UwU168KQk3KjcqLQktCU3lJgnvSMI7VFoSmspNEm5UWhI+6TBTDjPlMFNevEnlJglNpSXhRuUmCU8k4UalJeFGpSWhqbQkPKFyo/JJh5lymCmHmRJ/4Q1JuFG5SUJTaUloKk8koancJOG/pHKThKbySYeZcpgph5ny4k0q71C5UblJwk9SaUloKk8k4QmVloSm8o7DTDnMlMNMefGmJPwklRuVmyQ0labySUloKr+zw0w5zJTDTHnxYSqflIQblZaEG5WbJDSVloQnVD4pCd90mCmHmXKYKS++LAlPqLxDpSWhJeGbkvAnO8yUw0w5zJQXfzmVmyQ0lSdUWhKayk0SbpJwo/JJh5lymCmHmfLiD5eEpvKOJNyotCQ0lZsk3CShqbQktCQ0lXccZsphphxmyosvU/kmlZaEd6i0JLQk3CShqTyhcqPyTYeZcpgph5ny4sOS8JOS0FRaEprKTRJuVFoSbpLQVG6S0FRuktBU3nGYKYeZcpgp8Rdm/nWYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgp/wCQS6AgpPwyWgAAAABJRU5ErkJggg==";

    this.demo = this.sanitizer.bypassSecurityTrustResourceUrl(qrcode);
    this.demo = this.demo.changingThisBreaksApplicationSecurity;
  }
}