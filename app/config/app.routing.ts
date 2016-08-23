import { Routes, RouterModule } from '@angular/router';
import { ContactMainComponent } from '../components/contact-main.component';
import { HomeComponent } from '../components/home.Component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'contact-main',
		component: ContactMainComponent
	}
];
export const routing = RouterModule.forRoot(appRoutes);