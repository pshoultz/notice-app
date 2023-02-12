import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cms-broadcast',
  templateUrl: './cms-broadcast.component.html',
  styleUrls: ['./cms-broadcast.component.css']
})

export class CmsBroadcastComponent {
  ads: Array<string> = ['assets/htE0KtNl.jpeg', 'assets/HUlp2wQl.jpeg', 'assets/vM4dsRJl.jpg'];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: any;
  private image!: HTMLImageElement;
  private y = 0;
  private direction = 1;
  private speed = 1;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.image = new Image();
    this.image.src = this.ads[0];
    this.image.onload = () => this.animate();
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.drawImage(this.image, 0, this.y, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.y -= this.direction * this.speed;

    console.log(Math.abs(this.y), this.canvas.nativeElement.height)

    if(Math.abs(this.y + 10) == this.canvas.nativeElement.height) {
      //this.image.src = this.ads[1];
      //this.y = 0;
      //this.direction = 1;
      //this.speed = 1;
    }

    requestAnimationFrame(() => this.animate());
  }
}