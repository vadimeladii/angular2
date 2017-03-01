import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Team} from "./team";

@Injectable()
export class TeamService {

  constructor(private http: Http) {
  }

  public getAll(id: number) {
    return this.http.get("http://localhost:3001/v1/soccerseasons/" + id + "/teams")
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<Team> = [];
    response.json().teams.forEach(team => {
      array.push(new Team(team.name, team.code, team.shortName, team.squadMarketValue, team.crestUrl));
    });
    return array;
  }
}
