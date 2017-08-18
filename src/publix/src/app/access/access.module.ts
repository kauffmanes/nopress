/**
 * @name AccessModule
 * @description handles all functionality relating to logging in, password
 * management, and access to the application
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AccessRoutingModule } from './access-routing.module';

@NgModule({
	declarations: [
		AccountRecoveryComponent,
		CreateUserComponent,
		UserProfileComponent
	],
	imports: [
		CommonModule,
		AccessRoutingModule
	]
})

export class AccessModule { }