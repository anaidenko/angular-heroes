import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  constructor (private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location) {
  }

  ngOnInit () {
    this.getHero()
  }

  getHero () {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(data => this.hero = data)
  }

  goBack () {
    this.location.back()
  }

  save () {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
  }
}
