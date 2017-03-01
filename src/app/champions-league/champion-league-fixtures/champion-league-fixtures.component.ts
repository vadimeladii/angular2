import {Component, OnInit} from '@angular/core';
import {ChampionLeagueFixturesService} from "./champion-league-fixtures.service";
import {Fixtures} from "../../association/fixtures/fixtures";

@Component({
  selector: 'app-championship-fixtures',
  templateUrl: 'champion-league-fixtures.component.html',
  styleUrls: ['champion-league-fixtures.component.css'],
  providers: [ChampionLeagueFixturesService]
})
export class ChampionLeagueFixturesComponent implements OnInit {

  fixtures: Array<Fixtures>;

  constructor(private championshipFixturesService: ChampionLeagueFixturesService) {
  }

  ngOnInit() {
    this.championshipFixturesService.getAll().subscribe(
      championshipFixturesService => this.fixtures = championshipFixturesService,
      error => console.log(error)
    );
  }

}
