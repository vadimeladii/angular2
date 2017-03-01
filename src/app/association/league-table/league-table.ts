interface ILeagueTable {
  position: number;
  teamName: string;
  playedGames: number;
  wins: number;
  draws: number;
  losses: number;
  homeGoals: number;
  awayGoals: number;
  goalDifference: number;
  points: number;
}

export class LeagueTable {
  position: number;
  teamName: string;
  playedGames: number;
  wins: number;
  draws: number;
  losses: number;
  homeGoals: number;
  awayGoals: number;
  goalDifference: number;
  points: number;


  constructor(iLeagueTable: ILeagueTable) {
    this.position = iLeagueTable.position;
    this.teamName = iLeagueTable.teamName;
    this.playedGames = iLeagueTable.playedGames;
    this.wins = iLeagueTable.wins;
    this.draws = iLeagueTable.draws;
    this.losses = iLeagueTable.losses;
    this.homeGoals = iLeagueTable.homeGoals;
    this.awayGoals = iLeagueTable.awayGoals;
    this.goalDifference = iLeagueTable.goalDifference;
    this.points = iLeagueTable.points;
  }
}
