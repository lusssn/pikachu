import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
	selector: 'home',
	animations: [
		trigger(
			'moveBkg', 
			[
				state('move0',
					style({ left:"60%", top: "20%" })
				),
				state('move1',
					style({ left:"57%", top: "23%" })
				),
				state('move2',
					style({ left:"55%", top: "26%" })
				),
				state('move3',
					style({ left:"53%", top: "25%" })
				),
				state('move4',
					style({ left:"50%", top: "25%" })
				),
				state('move5',
					style({ left:"48%", top: "26%" })
				),
				state('move6',
					style({ left:"44%", top: "23%" })
				),
				state('move7',
					style({ left:"40%", top: "20%" })
				),
				state('move8',
					style({ left:"40%", top: "17%" })
				),
				state('move9',
					style({ left:"40%", top: "14%" })
				),
				state('move10',
					style({ left:"41%", top: "17%" })
				),
				state('move11',
					style({ left:"44%", top: "20%" })
				),
				state('move12',
					style({ left:"47%", top: "22%" })
				),
				state('move13',
					style({ left:"50%", top: "20%" })
				),
				transition("* <=> *", [
					animate(200)
				])
			]
		)
	],
	template: `
		<div class="text_bkg" [@moveBkg]="stateExpression"></div>
		<div class="decorated_letter" (mousewheel)="onMove($event)">Hello<br>Angular2</div>
	`,
	styles: [`
		.text_bkg {
			position: absolute;
			background-color: #37AEE1;
			width: 500px;
			height: 500px;
			border-radius: 250px;
			left: 50%;
			top: 20%;
			margin-left: -250px;
		}
		.decorated_letter {
			position: relative;
			font-family: "Kunstler Script";
			font-size: 300px;
			color: #FFF;
			text-align: center;
			line-height: 140px;
			padding: 90px 0;
			margin-top: 15%;
		}
	`],
})
export class HomeComponent { 
	stateArr: number[];
	index: number;
	directive: boolean;
	stateExpression: string;
	constructor() {
		this.stateExpression = "move13";
		this.index = 13;
		this.stateArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
	}
	onMove(e) {
		this.stateExpression = "move" + this.stateArr[this.index];
		if (e.wheelDelta > 0 && this.index < 13) {
			this.index++;
		} else if (e.wheelDelta < 0 && this.index > 0) {
			this.index--;
		}
	}

}
