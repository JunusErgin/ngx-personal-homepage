import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MetaConfig } from '../config/meta.config';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    meta = MetaConfig;
    @Input() sidenav: MatSidenav;

    constructor() {
    }

    ngOnInit() {
    }

}
