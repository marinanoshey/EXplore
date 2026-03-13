import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-cards',
  imports: [NzCardModule , NzGridModule , CommonModule , NzButtonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  cards = [
  {
    title: 'Paris',
    description: 'Travel in France',
    image: 'assets/images/tree.jpg'
  },
  {
    title: 'Italy',
    description: 'Visit Rome',
    image: 'assets/images/tree.jpg'
  },
  {
    title: 'Spain',
    description: 'Beautiful Madrid',
    image: 'assets/images/tree.jpg'
  },
  {
    title: 'Germany',
    description: 'Berlin city',
    image: 'assets/images/tree.jpg'
  }
];

}
