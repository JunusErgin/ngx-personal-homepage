import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaConfig } from './config/meta.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private titleService: Title) {
        this.setTitle();
    }

    private setTitle() {
        const title = MetaConfig.title + ' - ' + MetaConfig.subtitle;
        this.titleService.setTitle(title);
    }
}
