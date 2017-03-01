import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {TeamService} from "./team.service";
import {Team} from "./team";

@Component({
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {

  id: number;
  teams: Array<Team>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private teamService: TeamService) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = +params["id"];
    });

    this.teamService.getAll(this.id).subscribe(
      teams => this.teams = teams,
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

}
