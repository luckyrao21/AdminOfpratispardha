import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminDB';

  constructor(private auth:AuthenticateService,private _route:Router){

  }
  public isLoggedin():boolean{
    return this.auth.checkToken();
  }

  public signout(){
    sessionStorage.removeItem('jwt_token')
      this._route.navigate(['signin'])
  }
}
