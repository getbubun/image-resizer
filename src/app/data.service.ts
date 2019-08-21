import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  validateUrl(url){
   // return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
   return this.http.get(`${url}`)
    ;
  }
}
