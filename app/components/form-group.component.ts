import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Contact } from '../modules/contact';
import { ContactListsService } from '../services/contact-lists.service';

@Component({
	selector: 'form-group',
	directives: [FORM_DIRECTIVES],
	providers: [ContactListsService],
	template: `
	<input class="form_input" type="text" placeholder="姓名" [(ngModel)]="_item.name">
	<input class="form_input" type="text" placeholder="电话" [(ngModel)]="_item.tel">
	<input class="form_input" type="text" placeholder="邮箱" [(ngModel)]="_item.email">
	<input class="form_input" type="text" placeholder="地址" [(ngModel)]="_item.address">
	<a class="btn btn_form btn_company_static" href="#">添加</a>
	`,
	inputs: ['item']
})
export class FormGroupComponent {
	private _item: Contact;

	constructor(private _contactService: ContactListsService){
		this._item = this._contactService.getSelectedItem();
	}
}