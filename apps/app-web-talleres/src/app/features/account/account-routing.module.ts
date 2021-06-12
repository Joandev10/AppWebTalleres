import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';
import { AccountView } from './account.view';
import { RecoveryView } from './views/recovery/recovery.view';

const routes: Routes = [
    { path: '', redirectTo: 'iniciar-sesion' },
    {
        path: '',
        component: AccountView,
        children: [
            { path: 'iniciar-sesion', component: SignInView },
            { path: 'registrar', component: SignUpView },
            { path: 'recovery', component: RecoveryView }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
