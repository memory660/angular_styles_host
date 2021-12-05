import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: [
    `
      [nghost] {
        display: block;
        background: pink;
        color: blue;
      }
    `,
  ],
})
export class Comp1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
