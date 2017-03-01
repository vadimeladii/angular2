export class Association {

  id: number;
  caption: string;
  league: string;
  numberOfTeams: number;
  numberOfGames: number;
  link: string;


  constructor(id: number, caption: string, league: string, numberOfTeams: number, numberOfGames: number, link: string) {
    this.id = id;
    this.caption = caption;
    this.league = league;
    this.numberOfTeams = numberOfTeams;
    this.numberOfGames = numberOfGames;
    this.link = link;
  }
}
