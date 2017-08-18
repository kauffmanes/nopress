import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

const coreRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'environments', component: EnvironmentsComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(coreRoutes)
	],
	exports: [RouterModule]
})

export class CoreRoutingModule { }