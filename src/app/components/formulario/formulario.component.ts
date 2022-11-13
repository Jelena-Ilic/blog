import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postService: PostsService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
      ]),
      texto: new FormControl('', [
        Validators.required,
      ]),
      imagen: new FormControl('', [
        Validators.required,
      ]),
      autor: new FormControl('', [
        Validators.required,
      ]),
      fecha: new FormControl(),
      categoria: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit(): void {
  }

  checkError(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error)
      &&
      this.formulario.get(field)?.touched
  }

  pulsarBoton() {
    this.postService.createPost(this.formulario.value)
  }

}
