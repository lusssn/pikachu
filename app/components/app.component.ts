import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="title1">{{title}}</div>
	<nav>
		<a routerLink="/home">Home</a>
		<a routerLink="/main">Contacts</a>
	</nav>
	<router-outlet></router-outlet>
	`
})
export class AppComponent {
	public title = '通讯录';
}

