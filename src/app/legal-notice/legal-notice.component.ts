import { Component, OnInit } from '@angular/core';
import { MetaConfig } from '../config/meta.config';

@Component({
    selector: 'app-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

    meta = MetaConfig;

    constructor() {
    }

    ngOnInit() {
    }

}
