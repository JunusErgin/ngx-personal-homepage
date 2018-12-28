import { Component, OnInit } from '@angular/core';
import { MetaConfig } from '../config/meta.config';

@Component({
    selector: 'app-sub-footer',
    templateUrl: './sub-footer.component.html',
    styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent implements OnInit {

    meta = MetaConfig;

    constructor() {
    }

    ngOnInit() {
    }

}
