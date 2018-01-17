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
    this.heroService.GetHeroes().subscribe(heroesApi => this.heroes = heroesApi);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.AddHero({ name } as Hero).subscribe(
      hero => {this.heroes.push(hero);
    });
  }

  deleteHero(hero: Hero){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.DeleteHero(hero).subscribe();
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }
}


