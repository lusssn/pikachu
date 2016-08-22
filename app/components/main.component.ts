import { Component } from '@angular/core';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListService } from '../services/contact-list.service';

@Component({
	selector: 'main',
	directives: [],
	template: `
	<div class="my_app">
		<contact-list [contacts]="contacts" (doContactList)="onListChange($event)"></contact-list>
		<detail-board [selectedItem]="selectedItem" class="detail_board"></detail-board>
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
	contact-lists, detail-board, form-group {
		display: inline-block;
		vertical-align: top;
		margin: 0 20px;
	}
	form-group {
		width: 400px;
	}
	`],
})
export class MainComponent {
	public selectedItem: Contact;
	public editItem: Contact;
	public editSignal = false;
	public contacts: Contact[];

	constructor(private _contactService: ContactListService) {
		this.selectedItem = this._contactService.getSelected();
		this.contacts = this._contactService.getContactLists();
	}

	onListChange(signal) {
		if (signal == "selected") {
			this.selectedItem = this._contactService.getSelected();
		} else if (signal == "edit") {
			this.editItem = new ContactInit(this.selectedItem);
			this.editSignal = true;
		} else if (signal == "add") {
			this.editItem = this._contactService.getNewItem();
			this.editSignal = true;
		}
	}

	onFormChange(signal) {
		if (signal != "cancel") {
			this.contacts = this._contactService.getContactLists();
		} 
		if (signal == "save") {
			this.selectedItem = this._contactService.getSelected();
		}
		this.editSignal = false;
	}
}