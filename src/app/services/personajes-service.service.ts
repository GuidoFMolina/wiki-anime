import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class PersonajesServiceService {

  url : string = 'https://app-anime-wiki-default-rtdb.firebaseio.com';
  constructor(private http:HttpClient) { 

  }

  getCharacteres(){
    return this.http.get(`${this.url}/character.json`)
    .pipe(
      map( (resp: any) => {
        const res: any = [];
        Object.keys(resp).forEach( key => {
          const person: any = resp[key];
          person.id = key;
          res.push(person);
        })
        return res;
      })
    );
  }
}
