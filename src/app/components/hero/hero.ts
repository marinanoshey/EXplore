import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'

@Component({
  selector: 'app-hero',
  imports: [NzCarouselModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
 images = [
    { src:'assets/images/nature.jpg' ,alt: 'Nature' },
     { src:'assets/images/kobry.jpg' ,alt: 'Nature' },
    ];
}
