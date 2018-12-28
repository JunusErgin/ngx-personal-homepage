import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
    @Input() sidenav: MatSidenav;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    open(link: string) {
        this.sidenav.close();
        this.router.navigateByUrl(link);
    }

}
