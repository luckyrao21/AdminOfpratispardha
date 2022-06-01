import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SigninComponent } from './component/signin/signin.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { AdminService } from './service/admin.service';
import { GoogleLoginProvider, SocialAuthService, SocialLoginModule } from 'angularx-social-login';
import { TokenIntercepterService } from './service/token-interceptor.service';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { OnePlayerDetailComponent } from './component/one-player-detail/one-player-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { OrganiserListComponent } from './component/organiser-list/organiser-list.component';
import { OneOrgainiserComponent } from './component/one-orgainiser/one-orgainiser.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ToastrModule} from 'ngx-toastr';
import { CacheService} from './service/cache.service';
const socialProvider={
  provide:"SocialAuthServiceConfig",
  useValue:{
    providers:[{
      id:GoogleLoginProvider.PROVIDER_ID,
      provider:new GoogleLoginProvider('862613242441-586e0opknj44rplkvhh3d6q6gfjngiij.apps.googleusercontent.com')
    }]
  }
};
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ForgetPasswordComponent,
    TournamentListComponent,
    PlayerListComponent,
    OnePlayerDetailComponent,
    PageNotFoundComponent,
    OrganiserListComponent,
    OneOrgainiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [AdminService,socialProvider,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true,
  },
  {
    useClass: CacheService,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
