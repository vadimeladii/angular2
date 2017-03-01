import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ChampionshipTable} from "./championship-table";
import {GroupTable} from "./group-table";

@Injectable()
export class ChampionshipTableService {

  constructor(private http: Http) {
  }

  public getAll(): Observable<Array<ChampionshipTable>> {
    return this.http.get("http://localhost:3001/v1/soccerseasons/championship/leagueTable")
      .map(this.extractAssociations);
  }

  private extractAssociations(response: Response) {
    const arrayChampionship: Array<ChampionshipTable> = [];
    console.log(response.json());
    response.json().forEach(championshipTable => {
      const arrayGroup: Array<GroupTable> = [];
      championshipTable.groups.forEach(group => {
        arrayGroup.push(new GroupTable({
          group: group.group,
          team: group.team,
          crestURI: group.crestURI,
          points: group.points,
          goalsAgainst: group.goalsAgainst,
          goalDifference: group.goalDifference,
          playedGames: group.playedGames
        }))
      });
      arrayChampionship.push(new ChampionshipTable(championshipTable.type, arrayGroup));
    });
    return arrayChampionship;
  }

}
