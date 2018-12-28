import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalNoticeComponent } from './legal-notice.component';
import { LegalNoticeRoutingModule } from './legal-notice-routing.module';

@NgModule({
    declarations: [LegalNoticeComponent],
    imports: [
        CommonModule,
        LegalNoticeRoutingModule
    ]
})
export class LegalNoticeModule {
}
