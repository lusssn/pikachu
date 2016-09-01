import { Pipe } from '@angular/core';

@Pipe({ name: 'telformat' })
export class TelFormatPipe {
	transform(telNumber: string) {
		let telNumberArr = telNumber.split('');
		let telNumNewArr = [];

		for (let i = 0; i < telNumberArr.length; i++) {
			telNumNewArr.push(telNumberArr[i]);
			if (i == 2 || i == 6) {
				telNumNewArr.push('-');
			}
		}

		return telNumNewArr.join('');
	}
}
