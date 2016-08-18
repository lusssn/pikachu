import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Contact } from '../modules/contact';
/*import { ContactListsService } from '../services/contact-lists.service';*/

@Component({
	selector: 'form-group',
	directives: [FORM_DIRECTIVES],
	/*providers: [ContactListsService],*/
	template: `
	<span class="form_title">Name</span>
	<input class="form_input" type="text" >
	<span class="form_title">Telephone</span>
	<input class="form_input" type="text" >
	<span class="form_title">E-mail</span>
	<input class="form_input" type="text" >
	<span class="form_title">Address</span>
	<input class="form_input" type="text" >

	<a class="btn btn_company_static" href="#">Add</a>
	`,
	inputs: ['editItem']
})
export class FormGroupComponent {
	/*@Input() editItem: Contact;*/
}