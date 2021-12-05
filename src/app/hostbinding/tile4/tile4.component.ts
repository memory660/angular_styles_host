import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile4',
  template: `<h2>{{ person.name }}</h2> `,
  styles: [
    `
      :host {
        background: #0092ed;
        h2 {
          color: red;
        }
      }
      :host.highlighted {
        background: white;
        h2 {
          color: green;
        }
      }
    `,
  ],
})
export class Tile4Component implements OnInit {
  @Input() person: any;

  @HostBinding('class.highlighted')
  get promoted() {
    return this.person.promoted;
  }

  ngOnInit(): void {}
}
