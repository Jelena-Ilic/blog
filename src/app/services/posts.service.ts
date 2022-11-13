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
        titulo: 'Pollo asado',
        texto: 'El pollo asado, rostizado, en brasas o a la brasa es un plato genérico elaborado con un pollo expuesto directamente al fuego, que puede provenir de un hogar casero, hasta el asador profesional rotatorio.',
        autor: 'Maria Dueñas',
        imagen: 'https://images.hola.com/imagenes/cocina/recetas/20190729146642/pollo-asado-al-horno-con-tomillo/0-705-707/pollo-asado-horno-tomillo-m.jpg',
        fecha: '13-11-2022',
        categoria: 'comida',
      },
      {
        titulo: 'Tostas de salmón y aguacate',
        texto: 'Estas tostas de salmón son una idea magnifica para una cena ligera y rápida. Cuando uno no tiene muchas ganas de cocinar o vuelve de un día agotador en el trabajo pero aun así quiere disfrutar de algo delicioso para la cena.',
        autor: 'Miriam Sanz',
        imagen: 'https://www.ahumadosdominguez.es/wp-content/uploads/2019/07/img.jpg',
        fecha: '13/11/2022',
        categoria: 'cena',
      },
      {
        titulo: 'Lasaña de verdura',
        texto: 'Para aquellas personas que no son demasiado fan de las verduras. Esta lasaña puede lograr que todoa aquel que huya de los vegetales disfrute de ellos con todo el sabor y lo que mas les gusta de una buena lasaña.',
        autor: 'Sandra Martín',
        imagen: 'https://recetas.lidl.es/var/site/storage/images/_aliases/960x720/7/1/7/4/364717-2-spa-ES/Lasana-de-verduras.jpg',
        fecha: '13/11/2022',
        categoria: 'comida',
      },
      {
        titulo: 'Bowl de avena, helado y fruta',
        texto: 'Un postre sano y para toda la familia, delicioso y lleno de vitaminas. Completamente saludable y delicioso para los  mas golosos.',
        autor: 'Sergio Gonzalez',
        imagen: 'https://recetasveganas.net/wp-content/uploads/2018/09/desayuno-vegano-facil-barato-bol-avena-helado-fruta-3.jpg',
        fecha: '13/11/2022',
        categoria: 'desayuno',
      },
    ];
  }

  createPost(pPost: Post) {
    if (this.arrPosts.find(post => post.titulo !== pPost.titulo)) {
      this.arrPosts.push(pPost)
    } else {
      alert('El titulo del post ya existe')
    }

    console.log(this.arrPosts);

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


