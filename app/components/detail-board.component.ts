import { Component } from '@angular/core';
import { TelFormatPipe } from '../pipes/tel-format.pipe';

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
		{{selectedItem.tel | telformat}}
	</div>
	<div class="borad_item">
		<label>E-mail :</label>
		{{selectedItem.email}}
	</div>
	<div class="borad_item">
		<label>Address :</label>
		{{selectedItem.address | uppercase}}
	</div>
	<div class="board_decorator"></div>
	`,
	inputs: ['selectedItem'],
	pipes: [TelFormatPipe]
})
export class DetailBoardComponent { }