import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile7Component } from './tile7.component';

describe('Tile7Component', () => {
  let component: Tile7Component;
  let fixture: ComponentFixture<Tile7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tile7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tile7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
