import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ChampionLeagueTable} from "./champion-league-table";
import {GroupTable} from "../championship-table/group-table";

@Injectable()
export class ChampionLeagueTableService {

  constructor(private http: Http) {
  }

  public getAll(): Observable<Array<ChampionLeagueTable>> {
    return this.http.get("http://localhost:3001/v1/soccerseasons/championleague/leagueTable")
      .map(this.extractAssociations);
  }

  private extractAssociations(response: Response) {
    const arrayChampionship: Array<ChampionLeagueTable> = [];
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
      arrayChampionship.push(new ChampionLeagueTable(championshipTable.type, arrayGroup));
    });
    return arrayChampionship;
  }

}
