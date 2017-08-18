//Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

//3rd Party Libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Feature Modules
import { CoreModule } from "./core/core.module";
import { AccessModule } from "./access/access.module";

//AppModule Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		AccessModule,
		NgbModule.forRoot(), //todo - what does this do?
		AppRoutingModule
	],
	bootstrap: [AppComponent]
})

export class AppModule { }