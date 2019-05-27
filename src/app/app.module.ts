import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './core/services/auth.service';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AccountComponent } from './components/identity/account/account.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';

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
    NgxAuthFirebaseUIModule
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
