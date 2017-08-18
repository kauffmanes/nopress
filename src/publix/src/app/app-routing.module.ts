import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component';
import { EnvironmentsComponent } from './core/environments/environments.component';
import { PageNotFoundComponent } from './core/pageNotFound/pageNotFound.component';

import { LandingPageComponent } from './access/landing-page/landing-page.component';

const appRoutes: Routes = [
	//if logged in, go directly to dashboard, else:
	//{ path: '', component: LandingPageComponent },
	{ path: '', component: LandingPageComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {
			enableTracing: false//, //debugging only
			//preloadingStrategy: SelectivePreloadingStrategy //what
		})
	],
	declarations: [LandingPageComponent],
	exports: [
		RouterModule
	],
	providers: []
})

export class AppRoutingModule { }

//todo - add check for login as part of "resolve" param
//https://angular.io/guide/router#resolve-guard