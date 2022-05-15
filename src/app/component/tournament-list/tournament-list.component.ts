import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  DATA:any
  constructor(private _serve:AdminService) { }

  ngOnInit(): void {
      this._serve.tournamentList().subscribe(data=>{
        console.log(data)
        this.DATA=data
      })
  }
  
}
