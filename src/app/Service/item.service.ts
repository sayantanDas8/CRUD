import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  api_url: string = 'http://localhost:1000/item'

  constructor(private http: HttpClient) { }

  // get product
  viewItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.api_url);
  }

  // add product
  addItems(item: any):Observable<Item[]>{
    return this.http.post<Item[]>(this.api_url, item);
  }

  // single product
  viewSingleItems(id: any): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.api_url}/${id}`)
  }

  // delete product
  deleteItems(id: any){
    return this.http.delete(`${this.api_url}/${id}`);
  }

  //edit product
  editItems(id: any, item: any): Observable<Item[]>{
    return this.http.put<Item[]>(`${this.api_url}/${id}`, item)
  }
}
