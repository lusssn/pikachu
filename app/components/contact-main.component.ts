import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListService } from '../services/contact-list.service';

@Component({
	selector: 'contact-main',
	template: `
	<div class="title1">{{title}}</div>
	<contact-list [contacts]="contacts" (doContactList)="onListChange($event)"></contact-list>
	<detail-board [@detailInOut]="stateExpression" [selectedItem]="selectedItem" class="detail_board"></detail-board>
	<form-group class="form_group" 
		*ngIf=editSignal [editItem]="editItem"
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
	animations: [
		trigger('detailInOut', [
			state('in', style({transform: 'scale(1)'})),
			state('out', style({transform: 'scale(0)'})),
			transition('in => out', [
				animate(100)
			]),	
			transition('out => in', [
				animate(100)
			])
		])
	]
})
export class ContactMainComponent implements OnInit {
	public title = '通讯录';
	public selectedItem: Contact;
	public editItem: Contact;
	public editSignal = false;
	public contacts: Contact[];
	stateExpression: string;

	constructor(private _contactService: ContactListService) {	}

	ngOnInit() {
		this.selectedItem = this._contactService.getSelected();
		this.contacts = this._contactService.getContactLists();
		this.stateExpression = "out";
		console.log("ContactMainComponent OnInit...");
	}

	onListChange(signal) {
		if (signal == "selected") {
			this.selectedItem = this._contactService.getSelected();
			this.stateExpression = "in";
		} else if (signal == "edit") {
			this.editItem = new ContactInit(this.selectedItem);
			this.editSignal = true;
			this.stateExpression = "out";
		} else if (signal == "add") {
			this.editItem = this._contactService.getNewItem();
			this.editSignal = true;
			this.stateExpression = "out";
		}
	}

	onFormChange(signal) {
		if (signal != "cancel") {
			this.contacts = this._contactService.getContactLists();
		} 
		if (signal == "save") {
			this.selectedItem = this._contactService.getSelected();
		}
		this.stateExpression = "out";
		this.editSignal = false;
	}
}