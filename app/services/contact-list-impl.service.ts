import { Injectable, ReflectiveInjector } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { Contact, ContactInit } from '../modules/contact';
import { CONTACTS } from '../config/mock-contacts';

@Injectable()
export class ContactService implements ContactListService {
	private _selectedItem: Contact;
	private _contactLists: Contact[];

	constructor() {
		this.setSelected(new ContactInit());
		this.resetContactLists();
	}

	getSelected() {
		return this._selectedItem;
	}
	setSelected(item: Contact) {
		this._selectedItem = item;
	}
	resetSelected() {
		this.setSelected(new ContactInit());
		return this._selectedItem;
	}

	getContactLists() {
		return this._contactLists;
	}
	resetContactLists() {
		this._contactLists = CONTACTS;
	}
	addContactItem(item: Contact) {
		this._contactLists.push(item);
	}
	getContactItem(index: number) {
		return this._contactLists[index];
	}
	setContactItem(item: Contact) {
		this._contactLists[item.id-1] = item;
	}

	getNewItem() {
		let newItem: Contact = new ContactInit();
		newItem.id = this._contactLists.length + 1;
		return newItem;
	}

	resetContactItem(item: Contact) {
		item.id = 0;
		item.name = "";
		item.tel = "";
		item.email = "";
		item.address = "";
	}
}