import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formCadastro: FormGroup;
  
  get f(): any {
    return this.formCadastro.controls;
  }

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.validadorCadastro();
  }


  public validadorCadastro(): void {
    this.formCadastro = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [ Validators.required, Validators.email]],
      user: ['', [Validators.required, Validators.minLength(5)]],

    })
  }

}
