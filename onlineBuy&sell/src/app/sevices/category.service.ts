import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  HOME_URL='http://localhost:3001/';
  Categorys: Observable<Category[]>;
  Category:Observable<Category>;

  constructor(private http: HttpClient) { }

  addCategory(Category: Category) {
    debugger
    const url = this.HOME_URL + 'Categorys';
    return this.http.post(url, Category)

  }

  getCategorys(): Observable<Category[]> {
    this.Categorys = this.http.get<Category[]>(this.HOME_URL + 'Categorys');
    return this.Categorys;

  }

  getCategoryById(id): Observable<Category> {
    this.Category = this.http.get<Category>(this.HOME_URL + 'Categorys/'+id);
    return this.Category;

  }

  updateCategory(Category) {
    const url = this.HOME_URL + 'Categorys/' + Category.id;
    return this.http.put(url, Category)
  }
  deleteCategory(Category) {
    const url = this.HOME_URL + 'Categorys/' + Category.id;
    return this.http.delete(url)
  }

}