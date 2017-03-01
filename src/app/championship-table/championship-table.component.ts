import {Component, OnInit} from '@angular/core';
import {ChampionshipTableService} from "./championship-table.service";
import {ChampionshipTable} from "./championship-table";

@Component({
  selector: 'app-championship',
  templateUrl: 'championship-table.component.html',
  styleUrls: ['championship-table.component.css'],
  providers: [ChampionshipTableService]
})
export class ChampionshipTableComponent implements OnInit {

  championshipTables: Array<ChampionshipTable>;

  constructor(private championshipTableService: ChampionshipTableService) {
  }

  ngOnInit() {
    this.championshipTableService.getAll().subscribe(
      championshipTables => this.championshipTables = championshipTables,
      error => console.log(error)
    );
  }
}
