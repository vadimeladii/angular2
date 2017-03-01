import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FixturesService} from "./fixtures.service";
import {Fixtures} from "./fixtures";

@Component({
  selector: 'app-fixture',
  templateUrl: 'fixtures.component.html',
  styleUrls: ['fixtures.component.css'],
  providers: [FixturesService]
})
export class FixtureComponent implements OnInit {

  id: number;
  fixtures: Array<Fixtures>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fixturesService: FixturesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = +params["id"];
    });

    this.fixturesService.getAll(this.id).subscribe(
      fixtures => this.fixtures = fixtures,
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
