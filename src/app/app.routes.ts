import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './overview/overview.component';
import { PreprodComponent } from './overview/preprod/preprod.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'overview',
            component: OverviewComponent
        },
        {
            path: 'preprod',
            component: PreprodComponent
        },
        {
            path: 'account',
            component: AccountComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
