import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { house } from "../../house/house";
import { Hero } from "../../components/hero/hero";
import { Cards } from "../../components/cards/cards";

@Component({
  selector: 'app-home',
  imports: [Navbar, house, Hero, Cards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
