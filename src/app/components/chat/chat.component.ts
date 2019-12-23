import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  constructor(public cs: ChatService) {

    this.cs.cargarMensajes()
    .subscribe();
   }

  ngOnInit() {
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if( this.mensaje.length === 0){
      return;
    }

    this.cs.agregarMensaje(this.mensaje).then(() =>
    this.mensaje = '')
    .catch((err) => console.error('Error al enviar ', err));

  }

}
