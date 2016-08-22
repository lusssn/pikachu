import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListService } from '../services/contact-list.service';

@Component({
	selector: 'form-group',
	template: `
	<span class="form_title">Name</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.name">
	<span class="form_title">Telephone</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.tel">
	<span class="form_title">E-mail</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.email">
	<span class="form_title">Address</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.address">

	<div *ngIf="!editItem.isNew" class="btn btn_company_static" (click)="onSave()">Save</div>
	<div *ngIf="editItem.isNew" class="btn btn_company_static" (click)="onAdd()">Add</div>
	<div class="btn btn_cancel_static" (click)="onCancel()">Cancel</div>
	`
})
export class FormGroupComponent {
	@Input() editItem: Contact;
	@Output() doContactForm = new EventEmitter();
	
	constructor(private _contactService: ContactListService) {	}

	onCancel() {
		this.doContactForm.emit("cancel");
	}
	onSave() {
		this._contactService.setContactItem(this.editItem);
		this._contactService.setSelected(this.editItem);
		this.doContactForm.emit("save");
	}
	onAdd() {
		let newItem = new ContactInit(this.editItem);
		this._contactService.addContactItem(newItem);
		this.doContactForm.emit("add");
	}
}