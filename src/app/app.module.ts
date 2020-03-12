import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { HeaderComponent } from "./shared/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { AppState, InternalStateType } from './app.service';
import { RestUtils } from './dao/rest/rest.http.dao';
import { RestDaoFactory } from './dao/rest';
import { RestDaoModule } from './dao/rest/rest.dao.module';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENV_PROVIDERS } from './environment';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landingPage/landingPage.component';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  RestUtils
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};


@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    FooterComponent,
    // LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestDaoModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RestDaoModule,
  ],
  providers: [
    APP_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
    public appState: AppState
    ) {
}

}
