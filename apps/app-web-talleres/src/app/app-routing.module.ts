import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsView } from './views/workshops/workshops.view';
import { PortalView } from './views/portal/portal.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';

const routes: Routes = [
    { path: '', redirectTo: 'talleres', pathMatch: 'full' },
    {
        path: '',
        component: PortalView,
        children: [
            { path: 'talleres', component: WorkshopsView },
            { path: 'taller/:slug', component: WorkshopDetailView }
        ]
    },
    {
        path: 'account',
        loadChildren: () => import('./features/account/account.module').then((m) => m.AccountModule)
    },
    { path: '**', component: NotFoundView }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
