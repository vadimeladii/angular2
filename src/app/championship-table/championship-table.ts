import {GroupTable} from "./group-table";
export class ChampionshipTable {

  type: string;
  groups: Array<GroupTable>;

  constructor(type: string, groups: Array<GroupTable>) {
    this.type = type;
    this.groups = groups;
  }
}
