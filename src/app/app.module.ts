import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './core/services/auth.service';
import { LanguageService } from './core/services/language.service';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateCacheModule } from 'ngx-translate-cache';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AccountComponent } from './components/identity/account/account.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';

import { cookieCacheConfig } from './core/config/cookie.cache.consent';
import { cookieConfig } from './core/config/cookie.consent';
import { translateConfig } from './core/config/translate.loader';


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
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    NgxAuthFirebaseUIModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot(translateConfig),
    TranslateCacheModule.forRoot(cookieCacheConfig),
  ],
  providers: [
    AuthService,
    LanguageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
