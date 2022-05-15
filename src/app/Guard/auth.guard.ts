import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _serve:AdminService, private _router:Router){}

  canActivate(): boolean{
    if(this._serve.checkToken()){
      return true;
    }else{
      this._router.navigate(['signin']);
      return false;
    }
  }

}
