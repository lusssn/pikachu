import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="top_nav_bar">
		<div class="top_nav_wrapper">
			<a class="btn_nav_tool"
				*ngFor="let route of routers"  
				routerLink={{route.route}}
				[class.active]="selectNav === route.name"
				(click)="onClick(route.name)">
				{{route.name}}
				<span *ngIf="selectNav === route.name" class="nav_tool_triangle"></span>
			</a>
		</div>
	</div>
	<router-outlet></router-outlet>
	`
})
export class AppComponent {
	public title = '通讯录';
	public routers;
	public selectNav;

	constructor() {
		this.routers = [
			{
				name: "Home",
				route: "/home"
			},
			{
				name: "Contacts",
				route: "/contact-main"
			}
		];
		this.selectNav = "Home";
	}

	onClick(routeName) {
		this.selectNav = routeName;
	}

}

