import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firestore
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
