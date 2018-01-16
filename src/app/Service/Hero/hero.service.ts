import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../../Model/Hero';
import { HEROES } from '../../Mock/mock-heroes';

import { MessageService } from '../Messages/message.service';

@Injectable()
export class HeroService {

  GetHeroes(): Observable<Hero[]> {
    this.messageServ.Add('HeroService: fetched heroes');
    return of(HEROES);
  }

  GetHeroById(id: Number): Observable<Hero> {
    this.messageServ.Add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageServ: MessageService) { }

}
