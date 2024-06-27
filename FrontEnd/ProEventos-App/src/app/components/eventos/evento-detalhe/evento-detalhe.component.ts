import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  form: FormGroup;
  
  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validador();
  }

  public validador(): void {
    this.form = this.fbuilder.group({
      tema: ['', [ Validators.required, Validators.minLength(4), Validators.maxLength(50) ]],
      local: ['', Validators.required ],
      dataEvento: ['', Validators.required ],
      qtdPessoas: ['', [ Validators.required, Validators.max(1200) ]],
      telefone: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      imagemURL: ['', Validators.required ]
    });
  };

  public limpaForm(): void {
    return this.form.reset();
  }
}
