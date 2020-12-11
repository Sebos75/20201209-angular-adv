import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './advices-page.component.html',
  styles: [
  ]
})
export class AdvicesPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  routeTo(articleId: number): void {
    this.router.navigate(['article', articleId], { relativeTo: this.activatedRoute });
  }
}
