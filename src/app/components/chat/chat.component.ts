import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  constructor() { }

  ngOnInit() {
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }

}
