import {GroupTable} from "../championship-table/group-table";
export class ChampionLeagueTable {

  type: string;
  groups: Array<GroupTable>;

  constructor(type: string, groups: Array<GroupTable>) {
    this.type = type;
    this.groups = groups;
  }
}
