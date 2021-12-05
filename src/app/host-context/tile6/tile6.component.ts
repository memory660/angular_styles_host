import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile6',
  template: `
    <div class="article">
      <h2>{{ person.name }}</h2>
      <p>{{ person.description }}</p>
    </div>
  `,
  styles: [
    `
      :host-context(.list) {
        display: flex;
        align-items: center;

        .article {
          margin-left: 16px;
        }
      }

      :host-context(.grid) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .article {
          align-items: center;
        }
      }

      .article {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class Tile6Component implements OnInit {
  @Input() person: any;

  constructor() {}

  ngOnInit(): void {}
}
