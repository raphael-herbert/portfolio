import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        ButtonComponent,
        DialogComponent,
        HeaderComponent,
        HomeComponent,
        ServicesComponent,
        ExperiencesComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
