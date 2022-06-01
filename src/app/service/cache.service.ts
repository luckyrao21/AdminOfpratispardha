import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService implements HttpInterceptor{
  cache:Map<string,HttpResponse<any>> = new Map<string,HttpResponse<any>>();
  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    if(request.method !='GET'){
      console.log("Request send to Server.....");
      return next.handle(request);
    }

    let cachedResponse = this.cache.get(request.url);
    if(cachedResponse){
      console.log("Response return from cached........");
      return of(cachedResponse);
    }else{
      return next.handle(request).pipe(tap(statevent=>{
            if(statevent instanceof HttpResponse){
              this.cache.set(request.url,statevent.clone());
            }
      }));
    }
  }
}
