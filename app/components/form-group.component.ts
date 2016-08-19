import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListsService } from '../services/contact-lists.service';

@Component({
	selector: 'form-group',
	directives: [FORM_DIRECTIVES],
	template: `
	<span class="form_title">Name</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.name">
	<span class="form_title">Telephone</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.tel">
	<span class="form_title">E-mail</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.email">
	<span class="form_title">Address</span>
	<input class="form_input" type="text" [(ngModel)]="editItem.address">

	<a *ngIf="editItem.isNew" class="btn btn_company_static" href="#" (click)="onAdd()">Add</a>
	<a class="btn btn_cancel_static" href="#" (click)="onCancel()">Cancel</a>
	`
})
export class FormGroupComponent {
	@Input() editItem: Contact;
	@Output() doContactForm = new EventEmitter();
	
	constructor(private _contactService: ContactListsService) {	}

	onCancel() {
		// TODO
		// 编辑状态下还原数据 
		
		this.doContactForm.emit("cancel");
	}
	onAdd() {
		let newItem = new ContactInit(this.editItem);
		this._contactService.addContactItem(newItem);
		this.doContactForm.emit("add");
	}
}