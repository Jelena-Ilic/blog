import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'pollo asado',
        texto: 'mm que rico esta',
        autor: 'yo y solo yo',
        imagen: 'https://images.hola.com/imagenes/cocina/recetas/20190729146642/pollo-asado-al-horno-con-tomillo/0-705-707/pollo-asado-horno-tomillo-m.jpg',
        fecha: '12/12',
        categoria: 'comida',
      },
      {
        titulo: 'pollo asado2',
        texto: 'mm que rico esta',
        autor: 'yo y solo yo',
        imagen: 'https://i.blogs.es/1462bc/pollo-asado-arguinano2/1366_2000.jpg',
        fecha: '12/12',
        categoria: 'comida',
      },
      {
        titulo: 'piruleta',
        texto: 'mm que rico esta',
        autor: 'yo y solo yo',
        imagen: 'https://www.caramelospaco.com/264-superlarge_default/piruleta-multicolor-grande.jpg',
        fecha: '12/12',
        categoria: 'caramelos',
      }
    ];
  }

  createPost(pPost: Post) {
    if (this.arrPosts.find(post => post.titulo !== pPost.titulo)) {
      this.arrPosts.push(pPost)
    } else {
      alert('El titulo del post ya existe')
    }

  }

  getAll() {
    return this.arrPosts;
  }

  getAllCategories(): string[] {
    let categories: string[] = [];
    this.arrPosts.forEach(post => {
      if (categories.indexOf(post.categoria) == -1)
        categories.push(post.categoria)
    })
    return categories;
  }

  filterByCategoria(pCategoria: string) {
    let arrDePost = this.arrPosts;
    let filtrado = arrDePost.filter(post => post.categoria.toLowerCase() === pCategoria.toLowerCase());
    if (pCategoria === "null") {
      filtrado = this.getAll();
    }
    return filtrado;
  }
}


