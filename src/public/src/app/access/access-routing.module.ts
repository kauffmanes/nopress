import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const accessRoutes: Routes = [
	{ path: 'new-account', component: CreateUserComponent },
	{ path: 'profile', component: UserProfileComponent },
	{ path: 'account-recovery', component: AccountRecoveryComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(accessRoutes)
	],
	exports: [RouterModule]
})

export class AccessRoutingModule { }