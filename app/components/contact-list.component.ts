import { Component, Output, EventEmitter } from '@angular/core';
import { Contact, ContactInit } from '../modules/contact';
import { ContactListService } from '../services/contact-list.service';

@Component({
	selector: 'contact-list',
	template: `
	<ul class="nav_list">
		<li class="list_item list_item_lg list_item_static" 
			*ngFor="let item of contacts"
			[class.list_item_selected]="item === _selectedItem"
			(mouseenter)="onEnter(item)"> 
			<span>{{item.id}}</span>
			{{item.name}}<div class="btn_edit" *ngIf="item === _selectedItem" (click)="onEdit()">编辑</div>
		</li>
		<li class="list_item list_item_lg list_item_static"
			(click)="onAdd()">
			Add New
		</li>
	</ul>
	`,
	styles: [`
	.btn_edit {
		float: right;
		color: #1B84B2;
		text-decoration: underline;
	}
	.btn_edit:hover {
		text-decoration: none;
	}
	`],
	inputs: ['contacts']
})
export class ContactListComponent {
	@Output() doContactList = new EventEmitter();
	private _selectedItem: Contact;

	constructor(private _contactService: ContactListService) {
		this._selectedItem = this._contactService.getSelected();
	}
	onEnter(item: Contact) {
		this._contactService.setSelected(item);
		this._selectedItem = this._contactService.getSelected();
		this.doContactList.emit("selected");
	}
	onEdit() {
		this.doContactList.emit("edit");
	}
	onAdd() {
		this._selectedItem = this._contactService.resetSelected();
		this.doContactList.emit("add");
	}
}