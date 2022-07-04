import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tournamen2Component } from './tournamen2.component';

describe('Tournamen2Component', () => {
  let component: Tournamen2Component;
  let fixture: ComponentFixture<Tournamen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tournamen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tournamen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
