import { Component, OnInit } from '@angular/core';
import { NFLDataService } from 'src/app/services/nfl-data.service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-nfl-card',
  templateUrl: './nfl-card.component.html',
  styleUrls: ['./nfl-card.component.scss']
})
export class NflCardComponent implements OnInit {

  nflData$: Observable<Team[]>;

  constructor(private nflDataService: NFLDataService) { }

  ngOnInit() {
    this.nflData$ = this.nflDataService.getJSON();
  }

}
