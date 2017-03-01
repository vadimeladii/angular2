interface IGroupTable {
  group: string;
  team: string;
  crestURI: string
  points: number;
  goalsAgainst: number;
  goalDifference: number;
  playedGames: number;
}

export class GroupTable {

  group: string;
  team: string;
  crestURI: string;
  points: number;
  goalsAgainst: number;
  goalDifference: number;
  playedGames:number;

  constructor(iGroupTable: IGroupTable) {
    this.group = iGroupTable.group;
    this.team = iGroupTable.team;
    this.crestURI = iGroupTable.crestURI;
    this.points = iGroupTable.points;
    this.goalsAgainst = iGroupTable.goalsAgainst;
    this.goalDifference = iGroupTable.goalDifference;
    this.playedGames = iGroupTable.playedGames;
  }
}
