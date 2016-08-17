import { Injectable } from '@angular/core';
import { Contact } from '../modules/contact';
import { CONTACTS } from '../config/mock-contacts';

@Injectable()
export class ContactListsService {
	private _selectedItem: Contact;

	constructor() {
		this._selectedItem = CONTACTS[0];
	}

	getSelectedItem() {
		return this._selectedItem;
	}

	setSelectedItem(item: Contact) {
		this._selectedItem = item;
	}
}