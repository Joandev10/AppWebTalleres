import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';
import { AccountView } from './account.view';
import { RecoveryView } from './views/recovery/recovery.view';

/* Modules */
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GlxButtonModule } from '@galaxy/components/button';
import { GlxFooterModule } from '@galaxy/components/footer';
import { GlxHeaderModule } from '@galaxy/components/header';
import { GlxIconModule } from '../../../../../../libs/components/src/lib/icon/icon.module';

@NgModule({
    declarations: [AccountView, SignInView, SignUpView, RecoveryView],
    imports: [
        CommonModule,
        AccountRoutingModule,
        GlxHeaderModule,
        GlxFooterModule,
        GlxButtonModule,
        GlxIconModule,
        ReactiveFormsModule
    ]
})
export class AccountModule {}
