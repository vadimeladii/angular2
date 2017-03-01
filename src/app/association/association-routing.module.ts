import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TeamComponent} from "./team/team.component";
import {LeagueTableComponent} from "./league-table/league-table.component";
import {FixtureComponent} from "./fixtures/fixtures.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "team/:id", component: TeamComponent},
      {path: "league/:id", component: LeagueTableComponent},
      {path: "fixtures/:id", component: FixtureComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AssociationRoutingModule {
}
