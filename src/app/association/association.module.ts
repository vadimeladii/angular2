import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AssociationComponent} from "./association.component";
import {AssociationRoutingModule} from "./association-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AssociationRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [AssociationComponent]
})
export class AssociationModule { }
