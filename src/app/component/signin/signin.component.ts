import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {SocialAuthService,GoogleLoginProvider} from 'angularx-social-login'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/model/admin';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myAdmin:Admin = new Admin("","")

  DATA:any;


  constructor( private _serve:AdminService, private _router:Router,private taost:ToastrService,private socialService:SocialAuthService,private admin:AdminService) {  }
  ngOnInit(): void {
  }

  login(){
    this._serve.signin(this.myAdmin).subscribe(data=>{
      this.DATA=data
      console.log(this.DATA)

      if(this.DATA.message){
        this.taost.error('invalid Credentials')
      }
      else{
        this.taost.success('login success')
        sessionStorage.setItem('jwt_token',this.DATA.token)

        this._router.navigate(['view-tournament'])
      }
    },err=>{
      console.log(err);
      if(err instanceof HttpErrorResponse){
          if(err.status==401){
            this.taost.error('Please Enter Correct Credentials')
          }
      }
    })
  }

  // public signWithGoogle(){
  //   this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   this.socialService.authState.subscribe(data=>{
  //     this.admin.signinWithGoogle(data.email).subscribe(userData=>{
  //       if(userData.status){
  //         localStorage.setItem('jwt_token',userData.token);
  //         localStorage.setItem('UserLoginId',userData.result._id);
  //          this._router.navigate(['home']);
  //       }else{
  //         alert("not found");
  //       }
  //       },err=>{
  //         alert("Email not found please Sign up");
  //         this._router.navigate(["sign-up"]);
  //       })
  //   })

  // }

  public googleSignin(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.socialService.authState.subscribe(data=>{
      this.admin.signinWithGoogle(data.email).subscribe(Daata=>{
        this.taost.success("Login Success")
        this.DATA=Daata
        if(this.DATA.status){
          sessionStorage.setItem('jwt_token',this.DATA.token);
          sessionStorage.setItem('UserLoginId',this.DATA.result._id);
          this._router.navigate(['view-tournament'])
        }
        else{
          alert('not found')
        }
      })
    })
    }

}
