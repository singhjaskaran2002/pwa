import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { JokesComponent } from "./jokes/jokes.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { JokesService } from './jokes/jokes.service';
import { NewsComponent } from './news/news.component';
import { AccountComponent } from './account/account.component';
import { NewsService } from './news/news.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, JokesComponent, NewsComponent, AccountComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [JokesService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
