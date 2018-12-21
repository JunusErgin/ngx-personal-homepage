import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SidemenuComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
