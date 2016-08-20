import { Component } from '@angular/core';

@Component({
	selector: 'detail-board',
	template: `
	<div class="board_bkg"></div>
	<div class="borad_item">
		<label>Name :</label>
		{{selectedItem.name}}
	</div>
	<div class="borad_item">
		<label>Tel :</label>
		{{selectedItem.tel}}
	</div>
	<div class="borad_item">
		<label>E-mail :</label>
		{{selectedItem.email}}
	</div>
	<div class="borad_item">
		<label>Address :</label>
		{{selectedItem.address}}
	</div>
	<div class="board_decorator"></div>
	`,
	inputs: ['selectedItem']
})
export class DetailBoardComponent {

}