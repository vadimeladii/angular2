import { Component, OnInit } from '@angular/core';
import {Association} from "./association";
import {Router} from "@angular/router";
import {AssociationService} from "./association.service";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css'],
  providers: [AssociationService]
})
export class AssociationComponent implements OnInit {

  associations: Array<Association> = [];

  constructor(private router: Router,
              private associationService: AssociationService) {
  }

  ngOnInit() {
    this.associationService.getAll().subscribe(
      associations => this.associations = associations,
      error => console.log(error)
    );
  }

  onSelect(id: number) {
    this.router.navigate(["/team", id]);
  }

}
