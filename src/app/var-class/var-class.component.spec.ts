import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarClassComponent } from './var-class.component';

describe('VarClassComponent', () => {
  let component: VarClassComponent;
  let fixture: ComponentFixture<VarClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
