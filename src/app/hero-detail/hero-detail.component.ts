import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../Service/Hero/hero.service';
import { Hero } from '../Model/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.GetHero();
  }

  GetHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.GetHeroById(id).subscribe(hero => this.hero = hero);
  }

  saveHero(): void {
    this.heroService.UpdateHero(this.hero).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
