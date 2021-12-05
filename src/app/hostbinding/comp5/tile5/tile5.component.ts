import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tile5',
  template: `<h2>{{ person.name }}</h2> `,
  styles: [
    `
      :host[data-state='regular'] {
        background: #0092ed;
        color: green;
      }
      :host[data-state='active'] {
        background-color: white;
        color: red;
      }
      :host[data-state='disabled'] {
        background-color: light-grey;
        color: dark-grey;
      }
    `,
  ],
})
export class Tile5Component implements OnInit {
  @Input() person: any;

  @Input()
  @HostBinding('attr.data-state')
  state: 'active' | 'disabled' | 'regular' = 'regular';

  ngOnInit(): void {}
}
