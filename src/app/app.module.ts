import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModule } from './firebase.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateCacheModule } from 'ngx-translate-cache';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { AgmCoreModule } from '@agm/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './components/shared/shared.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AccountComponent } from './components/identity/account/account.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { LocationComponent } from './components/location/location.component';
import { AuthBarComponent } from './components/shared/auth-bar/auth-bar.component';
import { GetPromotionComponent } from './components/get-promotion/get-promotion.component';

import { AuthService } from './core/services/auth.service';
import { appReducers } from './+store/reducers/app.reducers';
import { PromotionEffects } from './+store/effects/promotion.effects';

import { environment } from 'src/environments/environment';
import { cookieConfig, agmConfig, translateConfig, cookieCacheConfig } from './core/config/index.config';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ErrorEffects } from './+store/effects/error.effects';
import { SpinnerEffects } from './+store/effects/spinner.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    AccountComponent,
    ProfileComponent,
    MenuComponent,
    NavigationComponent,
    AuthBarComponent,
    LocationComponent,
    GetPromotionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FirebaseModule,
    NgxAuthFirebaseUIModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot(translateConfig),
    TranslateCacheModule.forRoot(cookieCacheConfig),
    AgmCoreModule.forRoot(agmConfig),
    StoreModule.forRoot(appReducers()),
    EffectsModule.forRoot([PromotionEffects, ErrorEffects, SpinnerEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
