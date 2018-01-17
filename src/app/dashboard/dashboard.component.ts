import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/Hero';
import { HeroService } from '../Service/Hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.GetHeroes();
  }

  GetHeroes(): void {
    this.heroService.GetHeroes().subscribe(x => this.heroes = x.slice(1, 5));
  }

}
