import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: `<h2>toto</h2>`,
  styles: [
    `
      :host {
        display: block;
        background: var(--tile-background);
        h2 {
          color: yellow;
        }
      }
    `,
  ],
})
export class TileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
