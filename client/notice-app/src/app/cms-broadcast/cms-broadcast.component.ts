import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-broadcast',
  templateUrl: './cms-broadcast.component.html',
  styleUrls: ['./cms-broadcast.component.css']
})

export class CmsBroadcastComponent {
  ads: Array<string> = ['assets/htE0KtNl.jpeg', 'assets/HUlp2wQl.jpeg', 'assets/vM4dsRJl.jpg'];
  currentImg: string = ""
  currentIdx = 0;
  currentHeight = 0;

  public cast() {
    this.currentIdx++;
    setTimeout(function() {
      scroll();
    }, 100)
  }

  private scroll() {
    this.currentHeight += 10;
  }
}