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
		<contact-lists [lists]="contacts" (selected)="onSelectChange($event)"></contact-lists>
		
		<div class="detail_board">
			<div class="board_bkg"></div>
			<div class="borad_item">
				<label>Name :</label>
				{{selectedItem.name}}
			</div>
			<div class="borad_item">
				<label>Tel :</label>
				{{selectedItem.tel}}
			</div>
			<div class="borad_item">
				<label>E-mail :</label>
				{{selectedItem.email}}
			</div>
			<div class="borad_item">
				<label>Address :</label>
				{{selectedItem.address}}
			</div>
			<div class="board_decorator"></div>
		</div>

		<form-group class="form_group" [editItem]="selectedItem"></form-group>
	</div>
	`,
	styles: [`
	.my_app {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}
	form-group {
		width: 400px;
	}
	`],
})
export class AppComponent {
	public title = '通讯录';
	public selectedItem: Contact;
	public contacts = CONTACTS;

	constructor() {
		this.selectedItem = {
			id: 0,
			name: "",
			tel: "",
			email: "",
			address: ""
		}
	}

	onSelectChange(item) {
		this.selectedItem = item;
	}
}

