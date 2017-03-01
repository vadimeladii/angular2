export class Team {

  name: string;
  code: string;
  shortName: string;
  squadMarketValue: string;
  crestUrl: string;

  constructor(name: string, code: string, shortName: string, squadMarketValue: string, crestUrl: string) {
    this.name = name;
    this.code = code;
    this.shortName = shortName;
    this.squadMarketValue = squadMarketValue;
    this.crestUrl = crestUrl;
  }
}
