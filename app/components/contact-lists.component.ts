import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../modules/contact';

@Component({
	selector: 'contact-lists',
	template: `
	<ul class="nav_list">
		<li class="list_item list_item_lg list_item_static" 
			*ngFor="let item of lists"
			[class.list_item_selected]="item === _selectedItem"
			(click)="onSelect(item)"
			(mouseenter)="onEnter(item)"
			(mouseleave)="onLeave()"> 
			<span>{{item.id}}</span>
			{{item.name}}<a class="btn_edit" *ngIf="item === _editItem" href="#">编辑</a>
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
	inputs: ['lists']
})
export class ContactListsComponent {
	@Output() selected = new EventEmitter();
	@Output() addNew = new EventEmitter();

	public lists: Contact[];
	private _editItem: Contact;
	private _selectedItem: Contact;

	onSelect(item: Contact) {
		this._selectedItem = item;
		this.selected.emit(this._selectedItem);
	}
	onEnter(item: Contact) {
		this._editItem = item;
	}
	onLeave() {
		this._editItem = null;
	}
	onAdd() {
		this.addNew.emit("true");
	}
}