import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http"
import {Fixtures} from "./fixtures";

@Injectable()
export class FixturesService {

  constructor(private http: Http) {
  }

  public getAll(id: number) {
    return this.http.get("http://localhost:3001/v1/soccerseasons/" + id + "/fixtures")
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<Fixtures> = [];
    response.json().fixtures.forEach(fixture => {
      array.push(new Fixtures({
        date: fixture.date, status: fixture.status, matchday: fixture.matchday,
        homeTeamName: fixture.homeTeamName, awayTeamName: fixture.awayTeamName,
        goalsHomeTeam: fixture.result.goalsHomeTeam, goalsAwayTeam: fixture.result.goalsAwayTeam
      }));
    });
    return array;
  }
}
