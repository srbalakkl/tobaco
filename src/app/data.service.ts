import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private http = new HttpHeaders().set("Content-Type","appliction/json").set("Accept","appliction/json");
  constructor( private Http :  HttpClient ) { }

  login(data:any){
    return this.Http.post(
      environment.apiurl +"data-server.php" ,
      data,
      {headers: this.http , params : new HttpParams().set("log","true") }
    )
  }

  signup(data:any){ 
    return this.Http.post(
      environment.apiurl+"data-server.php"  ,
      data,
      {headers: this.http , params : new HttpParams().set("sign","true") }
    )
  }

  fpassword(data:any){
    return this.Http.post(
      environment.apiurl+"data-server.php" ,
      data,
      {headers: this.http , params : new HttpParams().set("fpword","true") }
    )
  }
}
