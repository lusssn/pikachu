import { Component } from '@angular/core';
import { Contact } from '../modules/contact';
import { CONTACTS } from '../config/mock-contacts';
import { FormGroupComponent } from './form-group.component';
import { ContactListsComponent } from './contact-lists.component';

@Component({
	selector: 'my-app',
	directives: [FormGroupComponent, ContactListsComponent],
	template: `
	<div class="title1">{{title}}</div>
	<div class="my_app">
		<contact-lists [lists]="contacts"></contact-lists>
		<form-group class="form_group"></form-group>
	</div>
	`,
	styles: [`
	.my_app {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}
	form-group, contact-lists {
		display: block;
		padding-top: 20px;
	} 
	form-group {
		width: 400px;
	}
	`],
})
export class AppComponent {
	public title = '通讯录';

	public contacts = CONTACTS;
}

