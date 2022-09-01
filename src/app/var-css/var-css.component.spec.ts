import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarCssComponent } from './var-css.component';

describe('VarCssComponent', () => {
  let component: VarCssComponent;
  let fixture: ComponentFixture<VarCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
