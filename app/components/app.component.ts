import { Component } from '@angular/core';
import { Contact } from '../modules/contact';
import { FormGroupComponent } from './form-group.component';
import { ContactListsComponent } from './contact-lists.component';
import { ContactListsService } from '../services/contact-lists.service';

@Component({
	selector: 'my-app',
	directives: [FormGroupComponent, ContactListsComponent],
	providers: [ContactListsService],
	template: `
	<div class="title1">{{title}}</div>
	<div class="my_app">
		<contact-lists [lists]="lists" (doContactList)="onListChange($event)"></contact-lists>
		
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

		<form-group class="form_group" 
			*ngIf="editSignal" [editItem]="editItem"
			(doContactForm)="onFormChange($event)"></form-group>
	</div>
	`,
	styles: [`
	.my_app {
		width: 1170px;
		margin: 0 auto;
	}
	contact-lists, .detail_board, form-group {
		display: inline-block;
		vertical-align: top;
		margin: 0 20px;
	}
	form-group {
		width: 400px;
	}
	`],
})
export class AppComponent {
	public title = '通讯录';
	public selectedItem: Contact;
	public editItem: Contact;
	public editSignal = false;
	public lists: Contact[];

	constructor(private _contactService: ContactListsService) {
		this.selectedItem = this._contactService.getSelected();
		this.lists = this._contactService.getContactLists();
	}

	onListChange(signal) {
		if (signal == "selected") {
			this.selectedItem = this._contactService.getSelected();
		} else if (signal == "edit") {
			this.editItem = this.selectedItem;
			this.editSignal = true;
		} else if (signal == "add") {
			this.editItem = this._contactService.getNewItem();
			this.editSignal = true;
		}
	}

	onFormChange(signal) {
		if(signal == "cancel") {
			this.editSignal = false;
		} else if (signal == "add") {
			this.lists = this._contactService.getContactLists();
			this._contactService.resetContactItem(this.editItem);
			// 移除form-group
			this.editSignal = false;
		} 
	}
}

