import { Component, OnInit } from '@angular/core';

import { Hero } from '../Model/Hero';
import { HeroService } from '../Service/Hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  // Mock datas
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.GetHeroes().subscribe(heroesMock => this.heroes = heroesMock);
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }
}


