import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

export function config() {
  return environment.appName;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      config,
      {
        enableFirestoreSync: true,
        authGuardFallbackURL: environment.authGuardFallbackURL
      }),
  ]
})
export class FirebaseModule { }
