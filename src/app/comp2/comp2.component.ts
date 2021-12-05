import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styles: [
    `
      :host {
        display: block;
        border: 1px solid;
        background: #0092ed;
        color: red;
      }
    `,
  ],
})
export class Comp2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
