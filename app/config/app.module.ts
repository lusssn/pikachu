import { NgModule } from '@angular/core';
import { routing }        from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from '../components/app.component';
import { ContactMainComponent }  from '../components/contact-main.component';
import { ContactListComponent } from '../components/contact-list.component';
import { DetailBoardComponent } from '../components/detail-board.component';
import { FormGroupComponent } from '../components/form-group.component';
import { HomeComponent } from '../components/home.component';

import { ContactListService } from '../services/contact-list.service';
import { ContactService } from '../services/contact-list-impl.service';

@NgModule({
	imports: [BrowserModule, FormsModule, routing],		
	declarations: [
		AppComponent, 
		ContactMainComponent, 
		ContactListComponent, 
		DetailBoardComponent, 
		FormGroupComponent,
		HomeComponent
	],
	providers: [
		{ provide: ContactListService, useClass: ContactService }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}