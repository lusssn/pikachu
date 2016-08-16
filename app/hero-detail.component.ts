import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	template: `
	<div *ngIf="hero1">
		<h2>{{hero1.name}} </h2>
		<div>
			<label>id: </label>{{hero1.id}}
		</div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="hero1.name"  placeholder="name">
		</div>
	</div>
	`,
	inputs: ['hero1']
})
export class HeroDetailComponent {
	public hero: Hero;
}