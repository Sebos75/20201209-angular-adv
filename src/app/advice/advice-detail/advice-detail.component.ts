import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `
    <h2>Detale artykułu: </h2>
    <div>
      {{ queryParams | json}}
    </div>
    <p *ngIf="id; else pomidor">
      Mam Id: {{id}}
    </p>
    <ng-template #pomidor>
      Wybierz jakiś artykuł po lewej
    </ng-template>
  `
})
export class AdviceDetailComponent implements OnInit {

  id = 0;
  queryParams: Params = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // odczytaj id z routingu
    // wystrzel do serwera po advice
    // this.id = this.route.snapshot.params.id;
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
    });
  }

}
