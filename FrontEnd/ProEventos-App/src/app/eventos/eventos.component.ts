import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  
  
  public eventos: any = [];
  public eventosFiltrados: any = [];
  exibirImagem: boolean = true;
  private _filtroLista: string = '';
  
  public get filtroLista() : string{
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    // se o filtro lista tiver valor, retorna o valor no method, caso nao retorna todo o array
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos
  }

  filtrarEventos(filtrarPor: string) : any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )}

  constructor( private http: HttpClient ) { }

  // methodo chamado antes de iniciar a aplicação
  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {
    this.http.get('http://localhost:5000/api/Eventos')
      .subscribe(
        respostaDoSubscribe => {
          this.eventos = respostaDoSubscribe,
          this.eventosFiltrados = this.eventos
        },
          error => console.log(error)
      );
  }

}
