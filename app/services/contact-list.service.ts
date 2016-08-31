import { Contact } from '../modules/contact';

export abstract class ContactListService {
	getSelected: () =>　Contact;
	setSelected: (item: Contact) => void;
	resetSelected: () => Contact;

	getContactLists: () => Contact[];
	resetContactLists: () => void;
	addContactItem: (item: Contact) => void;
	getContactItem: (index: number) => Contact;
	setContactItem: (item: Contact) => void;

	getNewItem: () => Contact;
	resetContactItem: (item: Contact) => void;
}

