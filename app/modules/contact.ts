export interface Contact {
	id: number;
	name: string;
	tel: string;
	email: string;
	address: string;
	isNew?: boolean;
}

export class ContactInit implements Contact {
	id: number;
	name: string;
	tel: string;
	email: string;
	address: string;
	isNew: boolean;

	constructor(item?: Contact) {
		if (item) {
			this.id = item.id;
			this.name = item.name;
			this.tel = item.tel;
			this.email = item.email;
			this.address = item.address;
			this.isNew = false;
		} else {
			this.id = 0;
			this.name = "";
			this.tel = "";
			this.email = "";
			this.address = "";
			this.isNew = true;
		}
	}
}