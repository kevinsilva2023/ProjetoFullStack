import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor( private http: HttpClient ) { }

  // methodo chamado antes de iniciar a aplicação
  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('http://localhost:5000/api/Eventos')
      .subscribe(
        respostaDoSubscribe => this.eventos = respostaDoSubscribe,
          error => console.log(error)
      );
  }

}
