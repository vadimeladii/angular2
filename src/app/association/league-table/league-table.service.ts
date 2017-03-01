import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {LeagueTable} from "./league-table";

@Injectable()
export class LeagueTableService {

  constructor(private http: Http) {
  }

  public getAll(id: number) {
    return this.http.get("http://localhost:3001/v1/soccerseasons/" + id + "/leagueTable")
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<LeagueTable> = [];
    response.json().standing.forEach(leagueTable => {
      array.push(new LeagueTable({
        position: leagueTable.position,
        teamName: leagueTable.teamName,
        playedGames: leagueTable.playedGames,
        wins: leagueTable.wins,
        draws: leagueTable.draws,
        losses: leagueTable.losses,
        homeGoals: leagueTable.home.goals,
        awayGoals: leagueTable.away.goals,
        goalDifference: leagueTable.goalDifference,
        points: leagueTable.points
      }));
    });
    return array;
  }

  private extractTeam(response: Response) {
    console.log(response.json());
    return new LeagueTable({
        position: response.json().position,
        teamName: response.json().teamName,
        playedGames: response.json().playedGames,
        wins: response.json().wins,
        draws: response.json().draws,
        losses: response.json().losses,
        homeGoals: response.json().home.goals,
        awayGoals: response.json().away.goals,
        goalDifference: response.json().goalDifference,
        points: response.json().points
      });
  }

  getByID(idLeagueTable: number, id: number) {
    return this.http.get("http://localhost:3001/v1/soccerseasons/" + idLeagueTable + "/leagueTable/" + id)
      .map(this.extractTeam);
  }
}
