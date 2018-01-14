import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/Hero';
import { HEROES } from '../Mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  // Mock datas
  heroes = HEROES;

  // Héro sélectionné
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

