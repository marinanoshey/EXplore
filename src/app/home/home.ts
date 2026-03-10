import { Component, inject ,ViewEncapsulation  } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-home',
  imports: [NzButtonModule , NzFormModule , NzInputModule , ReactiveFormsModule, NzCarouselModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  //  encapsulation: ViewEncapsulation.None
})
export class Home {
 images = [{ url: 'https://picsum.photos/id/10/800/250', alt: 'Nature' },
    { url: 'https://picsum.photos/id/20/800/250', alt: 'Tech' },
    { url: 'https://picsum.photos/id/28/800/250', alt: 'Forest' },
    { url: 'https://picsum.photos/id/30/800/250', alt: 'City' }];
}
