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

  constructor(private messageServ: MessageService) { }

}
