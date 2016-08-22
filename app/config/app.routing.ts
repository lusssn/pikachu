import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main.component';
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
		path: 'main',
		component: MainComponent
	}
];
export const routing = RouterModule.forRoot(appRoutes);