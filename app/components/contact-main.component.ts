import { Component, OnInit} from '@angular/core';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListService } from '../services/contact-list.service';

@Component({
	selector: 'contact-main',
	template: `
	<div class="title1">{{title}}</div>
	<contact-list [contacts]="contacts" (doContactList)="onListChange($event)"></contact-list>
	<detail-board [selectedItem]="selectedItem" class="detail_board"></detail-board>
	<form-group class="form_group" 
		*ngIf="editSignal" [editItem]="editItem"
		(doContactForm)="onFormChange($event)"></form-group>
	`,
	styles: [`
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
export class ContactMainComponent implements OnInit {
	public title = '通讯录';
	public selectedItem: Contact;
	public editItem: Contact;
	public editSignal = false;
	public contacts: Contact[];

	constructor(private _contactService: ContactListService) { }

	ngOnInit() {
		this.selectedItem = this._contactService.getSelected();
		this.contacts = this._contactService.getContactLists();
		console.log("ContactMainComponent OnInit...");
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