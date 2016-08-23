import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="top_nav_bar">
		<div class="top_nav_wrapper">
			<a class="btn_nav_tool active" routerLink="/home">
				Home
				<span class="nav_tool_triangle"></span>
			</a>
			<a class="btn_nav_tool" routerLink="/main">Contacts</a>
		</div>
	</div>
	<router-outlet></router-outlet>
	`
})
export class AppComponent {
	public title = '通讯录';
}

