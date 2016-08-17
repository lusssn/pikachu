import { Component } from '@angular/core';
import { ContactListsService } from '../services/contact-lists.service';
import { Contact } from '../modules/contact';

@Component({
	selector: 'contact-lists',
	providers: [ContactListsService],
	template: `
	<ul class="nav_list">
		<li class="list_item list_item_lg list_item_static" 
			*ngFor="let item of lists"
			[class.list_item_selected]="item === _selectedItem"
			(click)="onSelect(item)"> 
			<span>{{item.id}}</span>
			{{item.name}}<br/>{{item.tel}}<br/>{{item.email}}<br/>{{item.address}}
		</li>
	</ul>
	`,
	inputs: ['lists']
})
export class ContactListsComponent {
	public lists: Contact[];
	private _selectedItem: Contact;

	constructor(private _contactService: ContactListsService){
		this._selectedItem = this._contactService.getSelectedItem();
	}

	onSelect(item: Contact) {
		this._selectedItem = item;
		this._contactService.setSelectedItem(item);
	}
}