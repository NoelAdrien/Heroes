import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../../Model/Hero';
import { HEROES } from '../../Mock/mock-heroes';

@Injectable()
export class HeroService {

  GetHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }

}
