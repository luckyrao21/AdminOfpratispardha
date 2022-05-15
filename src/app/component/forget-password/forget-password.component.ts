import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email:any
  DATA:any
  constructor(private _serve:AdminService,private route:Router){ }

  forgetPas(){
    this._serve.forgetPasswrod(this.email).subscribe(data=>{
      console.log(data)
      this.DATA=data;
      if(this.DATA.notFound){
        alert('Email not found')
      }
      else{
        alert('check your email to get Password')
          this.route.navigate(['signin'])
      }
    })
  }

  ngOnInit(): void {
  }

}
