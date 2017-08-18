/**
 * @name CoreModule
 * @description contains all of the code relating to create of environments, and
 * promotion of content
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [DashboardComponent, EnvironmentsComponent, PageNotFoundComponent],
	imports: [
		CommonModule,
		CoreRoutingModule
	]
})

export class CoreModule { }