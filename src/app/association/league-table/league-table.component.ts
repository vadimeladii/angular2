import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {LeagueTable} from "./league-table";
import {LeagueTableService} from "./league-table.service";

@Component({
  selector: 'app-league-table',
  templateUrl: 'league-table.component.html',
  styleUrls: ['league-table.component.css'],
  providers: [LeagueTableService]
})
export class LeagueTableComponent implements OnInit {

  id: number;
  leagueTables: Array<LeagueTable>;
  modalLeagueTable: LeagueTable;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private leagueTableService: LeagueTableService) {
    this.modalLeagueTable = new LeagueTable({
      position: undefined,
      teamName: undefined,
      playedGames: undefined,
      wins: undefined,
      draws: undefined,
      losses: undefined,
      homeGoals: undefined,
      awayGoals: undefined,
      goalDifference: undefined,
      points: undefined
    })
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = +params["id"];
    });

    this.leagueTableService.getAll(this.id).subscribe(
      leagueTables => this.leagueTables = leagueTables,
      error => console.log(error)
    );
  }

  onSelectLeagueTable(id: number) {
    this.router.navigate(["/league", id]);
  }

  onSelectTeam(id: number) {
    this.router.navigate(["/team", id]);
  }

  onSelectFixture(id: number) {
    this.router.navigate(["/fixtures", id]);
  }

  editLeagueTable(id: number) {
    this.leagueTableService.getByID(this.id, id).subscribe(
      leagueTable => this.modalLeagueTable = leagueTable,
      error => console.log(error)
    );  }
}
