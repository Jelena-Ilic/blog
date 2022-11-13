import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrPosts: Post[];
  optionsCategories: string[];

  constructor(
    private postService: PostsService
  ) {
    this.arrPosts = [];
    this.optionsCategories = [];
  }

  ngOnInit(): void {
    this.getListaAll()
  }

  getListaAll() {
    this.arrPosts = this.postService.getAll();
  }

  getListCategories() {
    this.optionsCategories = this.postService.getAllCategories()
  }

}
