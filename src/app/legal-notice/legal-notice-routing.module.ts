import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice.component';

const routes: Routes = [
    {
        path: '',
        component: LegalNoticeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LegalNoticeRoutingModule {
}
