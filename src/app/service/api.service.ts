import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from '../user/user.module';
import { Otp } from '../otp/otp';
import { Token } from '../token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  // user api

  public updateuser(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>("http://localhost:8080/api/user/update",user,{headers});

  }

  public changeImage(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>("http://localhost:8080/api/user/image",user,{
      headers: headers ,
      observe: 'response',});

  }



  public changePass(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>("http://localhost:8080/api/user/changePass",user,{
      headers: headers ,
      observe: 'response',});

  }


  public changeName(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>("http://localhost:8080/api/user/changeName",user,{
      headers: headers ,
      observe: 'response',});

  }


  public profile(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/user/user",{headers});

  }

  public regotp(f:any){
    return this.http.post<Otp>("http://localhost:8080/api/otp/register",f)
  }

  public loginotp(f:any){
    return this.http.post<Otp>("http://localhost:8080/api/otp/authenticate",f)
  }





  public login(loginuser: any) {
    return this.http.post<Token>('http://localhost:8080/api/auth/authenticate',loginuser);
  }

  public register(user : JSON){
   return this.http.post<Token>("http://localhost:8080/api/auth/register",user)
  }

  public logout(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/logout",{headers});
  }

  public getusers(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/user/users",{headers});
  }

  public getuser(id: any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/user/userid/"+id,{headers});
  }


  // Bills

  public getbills(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/v1/bill/all",{headers});
  }


  public postbill(f:JSON){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post("http://localhost:8080/api/v1/bill/save",f,{headers});
  }

  public updatebill(f:JSON,id:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.put("http://localhost:8080/api/v1/bill/update/"+id,f,{headers});
  }


  public deletebill(id:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.delete("http://localhost:8080/api/v1/bill/delete/"+id,{headers});
  }


  public findByTime(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post("http://localhost:8080/api/v1/bill/findByTime",{headers});
  }

  public findBySend(num:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/v1/bill/findBySend/"+num,{headers});
  }


  public findByRece(num:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/v1/bill/findByRece/"+num,{headers});
  }

  public findByNum(num:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/v1/bill/findByNum/"+num,{headers});
  }

  public getbillsByUser(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8080/api/v1/bill/getByUser",{headers});
  }

}
