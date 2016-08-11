import { Component } from '@angular/core';

interface Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero.name}} </h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label><div><input [(ngModel)]="hero.name"  placeholder="name"></div></div>'
})

export class AppComponent { 
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: '毛泽东'
	};
}
