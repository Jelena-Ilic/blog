import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
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
      categories.push(post.categoria)
    })
    return categories;
  }

  filterByCategoria(pCategoria: string) {
    return this.arrPosts.filter(post => post.categoria.toLowerCase() === pCategoria.toLowerCase())
  }
}


