import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor (private heroService: HeroService) {
  }

  ngOnInit () {
    this.getHeroes();
  }

  getHeroes () {
    this.heroService.getHeroes().subscribe(
      data => this.heroes = data.slice(1, 5)
    );
  }
}
