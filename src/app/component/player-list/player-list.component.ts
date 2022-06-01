import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  Data:any

  constructor(private _Serve:AdminService,private spin:NgxSpinnerService,private _router:Router) { }

  ngOnInit(): void {
    this.spin.show();
    this._Serve.PlayerList().subscribe(data=>{
      this.spin.hide();
      this.Data=data
      console.log(this.Data)
    })
  }

  public temp(X:String){
    // alert(X)
      this._router.navigate(['playerDetail/'+X])
  }

}
