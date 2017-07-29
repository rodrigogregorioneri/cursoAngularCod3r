import { ErrorHandler } from './../app.error-handler';
import { Restaurante } from './restaurante/restaurante.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from "rxjs"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class RestauranteService {

  constructor(private http: Http) { }


  list(): Observable<Restaurante[]> {
    return this.http.get("http://localhost:3000/restaurants")
      .map(result => result.json())
      .catch(ErrorHandler.handlerError)
  }


  find(id): Observable<Restaurante> {
    return this.http.get(`http://localhost:3000/restaurants/${id}`)
      .map(result => result.json())
      .catch(ErrorHandler.handlerError)
  }


  reviews(id): Observable<any> {
    return this.http.get(`http://localhost:3000/restaurants/${id}/reviews`)
      .map(result => result.json())
      .catch(ErrorHandler.handlerError)
  }

  menu(id): Observable<any> {
    return this.http.get(`http://localhost:3000/restaurants/${id}/menu`)
      .map(result => result.json())
      .catch(ErrorHandler.handlerError)
  }

}