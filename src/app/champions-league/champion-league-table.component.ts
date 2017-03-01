import {Component, OnInit} from '@angular/core';
import {ChampionLeagueTableService} from "./champion-league-table.service";
import {ChampionLeagueTable} from "./champion-league-table";

@Component({
  selector: 'app-championship',
  templateUrl: 'champion-league-table.component.html',
  styleUrls: ['champion-league-table.component.css'],
  providers: [ChampionLeagueTableService]
})
export class ChampionLeagueTableComponent implements OnInit {

  championshipTables: Array<ChampionLeagueTable>;

  constructor(private championshipTableService: ChampionLeagueTableService) {
  }

  ngOnInit() {
    this.championshipTableService.getAll().subscribe(
      championshipTables => this.championshipTables = championshipTables,
      error => console.log(error)
    );
  }
}
