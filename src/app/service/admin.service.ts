import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Admin } from '../model/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  SigninApi:any="https://spardhaa.herokuapp.com/admin/signin"
  // SigninApi:any="http://localhost:3000/admin/signin"
  forgetPasswordApi:any="http://localhost:3000/admin/forget-password"
  signinWithGoogleApi="https://spardhaa.herokuapp.com/admin/signup-with-google"
  tournamentListApi="https://spardhaa.herokuapp.com/tournament/view-tournament"
  playerListApi="https://spardhaa.herokuapp.com/view-players"


  public forgetPasswrod(x:String){
   return this._http.post(this.forgetPasswordApi,{email:x})
  }

  public signin(x:Admin){
    return this._http.post(this.SigninApi,x)
  }

  public signinWithGoogle(x:String){
    return this._http.post(this.signinWithGoogleApi,{email:x})
  }

  public tournamentList(){
    return this._http.get( this.tournamentListApi)
  }

  public PlayerList(){
    return this._http.get( this.playerListApi)
  }

  public ParticularPlayer(playerId:any){
    let url="https://spardhaa.herokuapp.com/view-profile/"+playerId
    return this._http.get(url)
  }




  public orgainiserLisrt(){
    let url="https://spardhaa.herokuapp.com/organiser/view-organiser-list"
    return this._http.get(url)
  }

  public oneOrgainiser(X:any){
    let url="https://spardhaa.herokuapp.com/organiser/view-profile/"+X
    return this._http.get(url)
  }

  public checkToken(){
    return !!sessionStorage.getItem('jwt_token');
  }

}
