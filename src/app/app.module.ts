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

// Servicio
import { ChatService } from './providers/chat.service';

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
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
