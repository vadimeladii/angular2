import {Component, OnInit} from '@angular/core';
import {ChampionshipFixturesService} from "./championship-fixtures.service";
import {Fixtures} from "../../association/fixtures/fixtures";

@Component({
  selector: 'app-championship-fixtures',
  templateUrl: './championship-fixtures.component.html',
  styleUrls: ['./championship-fixtures.component.css'],
  providers: [ChampionshipFixturesService]
})
export class ChampionshipFixturesComponent implements OnInit {

  fixtures: Array<Fixtures>;

  constructor(private championshipFixturesService: ChampionshipFixturesService) {
  }

  ngOnInit() {
    this.championshipFixturesService.getAll().subscribe(
      championshipFixturesService => this.fixtures = championshipFixturesService,
      error => console.log(error)
    );
  }

}
