import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  DATA: any
  constructor(private _serve: AdminService, private spin: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spin.show()
    this._serve.tournamentList().subscribe(data => {
      this.spin.hide();
      console.log(data)
      this.DATA = data
    })
  }

}
