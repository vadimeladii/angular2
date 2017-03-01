import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Association} from "./association";

@Injectable()
export class AssociationService {

  constructor(private http: Http) {
  }

  public getAll(): Observable<Array<Association>> {
    return this.http.get("http://localhost:3001/v1/soccerseasons")
      .map(this.extractAssociations);
  }

  private extractAssociations(response: Response) {
    const array: Array<Association> = [];
    response.json().forEach(association => {
      array.push(new Association(association.id, association.caption, association.league,
        association.numberOfTeams, association.numberOfGames, association.link));
    });
    return array;
  }
}
