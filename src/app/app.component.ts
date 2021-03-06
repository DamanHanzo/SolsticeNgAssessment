import { Component, OnInit } from '@angular/core';
import { NFLDataService } from './services/nfl-data.service';
import { Observable } from 'rxjs';
import { Team } from './models/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SolsticeNgAssessment';
}
