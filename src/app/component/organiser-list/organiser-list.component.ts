import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.css']
})
export class OrganiserListComponent implements OnInit {
  Data:any

  constructor(private _serve:AdminService,private _route:Router){
      this._serve.orgainiserLisrt().subscribe(data=>{
        if(data){
          this.Data=data
          // console.warn(this.Data);

        }
      })
   }

   public fetchOne(orgId:any){
        this._route.navigate(['orgainiserDetail/'+orgId])
   }



  ngOnInit(): void {
  }

}
