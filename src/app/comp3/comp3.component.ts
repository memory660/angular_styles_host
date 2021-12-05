import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styles: [
    `
      .red {
        --tile-background: #bf360c;
      }

      .green {
        --tile-background: #689f38;
      }

      :root {
        --blue: #1e90ff;
        --white: #ffffff;
      }

      h1 {
        color: var(--blue);
      }

      p {
        color: var(--white);
        background: var(--blue);
      }
    `,
  ],
})
export class Comp3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
