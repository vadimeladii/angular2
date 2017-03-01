interface IFixtures {
  date: Date;
  status: string;
  matchday: number;
  homeTeamName: string;
  awayTeamName: string;
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}

export class Fixtures {
  date: Date;
  status: string;
  matchday: number;
  homeTeamName: string;
  awayTeamName: string;
  goalsHomeTeam: number;
  goalsAwayTeam: number;

  constructor(ifixture: IFixtures) {
    this.date = ifixture.date;
    this.status = ifixture.status;
    this.matchday = ifixture.matchday;
    this.homeTeamName = ifixture.homeTeamName;
    this.awayTeamName = ifixture.awayTeamName;
    this.goalsHomeTeam = ifixture.goalsHomeTeam;
    this.goalsAwayTeam = ifixture.goalsAwayTeam;
  }
}
