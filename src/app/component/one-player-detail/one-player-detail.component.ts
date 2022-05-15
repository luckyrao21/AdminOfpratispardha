import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-one-player-detail',
  templateUrl: './one-player-detail.component.html',
  styleUrls: ['./one-player-detail.component.css']
})
export class OnePlayerDetailComponent implements OnInit {

  Data:any

  constructor(private activateRoute:ActivatedRoute,private _serve:AdminService) {
    let playerId=this.activateRoute.snapshot.params['playerId'];
    // alert(playerId)
    this._serve.ParticularPlayer(playerId).subscribe(data=>{
        console.warn(data);
        this.Data=data
    })

   }

  ngOnInit(): void {
  }

}
