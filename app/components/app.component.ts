import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="title1">{{title}}</div>
	<main></main>
	`
})
export class AppComponent {
	public title = '通讯录';
}

