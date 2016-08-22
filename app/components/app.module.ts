import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { ContactListComponent } from './contact-list.component';
import { DetailBoardComponent } from './detail-board.component';
import { FormGroupComponent } from './form-group.component';
import { ContactListService } from '../services/contact-list.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [
		AppComponent, 
		MainComponent, 
		ContactListComponent, 
		DetailBoardComponent, 
		FormGroupComponent
	],
	providers: [ContactListService],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}