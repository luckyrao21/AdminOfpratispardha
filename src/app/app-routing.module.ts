import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { OneOrgainiserComponent } from './component/one-orgainiser/one-orgainiser.component';
import { OnePlayerDetailComponent } from './component/one-player-detail/one-player-detail.component';
import { OrganiserListComponent } from './component/organiser-list/organiser-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { SigninComponent } from './component/signin/signin.component';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [{
  path:'view-tournament', component:TournamentListComponent,canActivate:[AuthGuard]
},
{
  path:'signin', component:SigninComponent,
},
{
  path:'playerList',component:PlayerListComponent,canActivate:[AuthGuard]
},
{
  path:'playerDetail/:playerId',component:OnePlayerDetailComponent,canActivate:[AuthGuard]
},
{
  path:'orgainiserList',component:OrganiserListComponent,canActivate:[AuthGuard]
},
{
  path:'orgainiserDetail/:orgId',component:OneOrgainiserComponent,canActivate:[AuthGuard]
}
,
{
  path:'**',component:PageNotFoundComponent
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
