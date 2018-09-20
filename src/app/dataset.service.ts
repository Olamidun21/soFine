import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Details } from './details';
// import { LOGINS } from './mock-details';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  public users = [
    {fullname: 'Samuel ',gender: 'Male',country: 'Nigeria',state: 'Oyo',address: 'Parrot',phone: '07064196171',email: 'sam@yahoo.com',username: 'Sammy',password: 'sam',category: 'Designer',company: 'Joytune',companyAdd: 'sqi'},
    {fullname: 'Lala Ayoade',gender: 'Male',country: 'Nigeria',state: 'Oyo',address: 'Parrot',phone: '07064196171',email: 'ayoadelala@yahoo.com',username: 'ayolala',password: 'ayolala',category: 'Designer',company: 'Joytune',companyAdd: 'sqi'},
    {fullname: 'Delight Olarinde',gender: 'Female',country: 'Nigeria',state: 'Oyo',address: 'Parrot',phone: '07064196171',email: 'delight@yahoo.com',username: 'delight',password: 'delight',category: 'Designer',company: 'Joytune',companyAdd: 'sqi'},
  ]
  constructor() { }

  

  sendSubmit(data){
    this.users.push(data);
    return this.users;
  }
  // processLogin() {
  //   return (this.users);
  // }

  // getUser(){

  // }

  

//   manage(): Observable<Details[]>{
//     return of (LOGINS);
// }
}
