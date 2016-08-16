import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES, HeroDetailComponent],
	providers: [HeroService],
	template: `
	<h1>{{title}}</h1>

	<hero-detail [hero1]="selectedHero"></hero-detail>

	<h2>英雄列表</h2>
	<ul class="heroes">
		<li *ngFor="let item of heroes"
			[class.selected]="item === selectedHero"
			(click)="onSelect(item)"
		> <span class="badge">{{item.id}}</span> {{item.name}}</li>
	</ul>
	`,
	styles:[`
	.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
	.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
	.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
	.heroes .badge {
		font-size: small;
		color: white;
		padding: 0.1em 0.7em;
		background-color: #369;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -1px;
	}
	.selected { background-color: #EEE; color: #369; }
	`]
})
export class AppComponent implements OnInit {
	public title = '英雄之旅';

    public heroes: Hero[];

    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
		this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

    onSelect(hero: Hero) { this.selectedHero = hero; }
}