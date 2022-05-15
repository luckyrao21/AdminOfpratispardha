import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmazonLoginProvider } from 'angularx-social-login';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-one-orgainiser',
  templateUrl: './one-orgainiser.component.html',
  styleUrls: ['./one-orgainiser.component.css']
})
export class OneOrgainiserComponent implements OnInit {

  uskiId:any
  Data:any

  constructor(private _serve:AdminService,private activateRoute:ActivatedRoute) {
    this.uskiId=activateRoute.snapshot.params['orgId']
    this._serve.oneOrgainiser(this.uskiId).subscribe(data=>{
      console.log(data)
      this.Data=data
    })
   }



  ngOnInit(): void {
  }



}
