import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Details } from './details';
import { LOGINS } from './mock-details';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {
  constructor() { }
  processLogin(): Observable<Details[]>{
    return of(LOGINS);

  }
  register(){
  }
}
