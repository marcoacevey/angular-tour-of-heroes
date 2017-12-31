import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * Retorna todos os heróis.
   * @returns Uma coleção de Heróis;
   */
  getHeroes(): Observable<Hero[]> {
    // todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  /**
   * Retorna um Herói especifico.
   * @param id ID do Herói.
   */
  getHero(id: number): Observable<Hero> {
    // todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
