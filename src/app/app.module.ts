import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {AssociationModule} from "./association/association.module";
import {LeagueTableComponent} from "./association/league-table/league-table.component";
import {TeamComponent} from "./association/team/team.component";
import {FixtureComponent} from "./association/fixtures/fixtures.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {AssociationComponent} from "./association/association.component";
import {RouterModule} from "@angular/router";
import { ChampionshipTableComponent } from './championship-table/championship-table.component';
import { ChampionshipFixturesComponent } from './championship-table/championship-fixtures/championship-fixtures.component';
import {ChampionLeagueTableComponent} from "./champions-league/champion-league-table.component";
import {ChampionLeagueFixturesComponent} from "./champions-league/champion-league-fixtures/champion-league-fixtures.component";

@NgModule({
  declarations: [
    AppComponent,
    FixtureComponent,
    LeagueTableComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent,
    ChampionshipTableComponent,
    ChampionshipFixturesComponent,
    ChampionLeagueTableComponent,
    ChampionLeagueFixturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AssociationModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "association",
        pathMatch: "full"
      },
      {path: "association", component: AssociationComponent},
      {path: "contact", component: ContactComponent},
      {path: "about", component: AboutComponent},
      {path: "championship-table", component: ChampionshipTableComponent},
      {path: "championship-fixtures", component: ChampionshipFixturesComponent},
      {path: "champion-league-table", component: ChampionLeagueTableComponent},
      {path: "champion-league-fixtures", component: ChampionLeagueFixturesComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
