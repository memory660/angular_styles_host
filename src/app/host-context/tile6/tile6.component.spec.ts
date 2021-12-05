import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile6Component } from './tile6.component';

describe('Tile6Component', () => {
  let component: Tile6Component;
  let fixture: ComponentFixture<Tile6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tile6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tile6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
