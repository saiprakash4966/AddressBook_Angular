import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(public http:HttpClient) { }

  add(address:any){
    return this.http.post("http://localhost:8080/addressbook/create",address);

  }

  getAll(){
    return this.http.get("http://localhost:8080/addressbook/");
  }

  updateById(address:any,Id:number){
    return this.http.put("http://localhost:8080/addressbook/update/{contactId}"+Id,address);
  }
  deleteById(Id:number){
    return this.http.delete("http://localhost:8080/addressbook/delete/{contactId}"+Id);
  }

  getById(Id:number){
   return this.http.get("http://localhost:8080/addressbook/get/{contactId}"+Id);
  }
}
