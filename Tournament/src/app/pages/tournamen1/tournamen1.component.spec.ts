import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tournamen1Component } from './tournamen1.component';

describe('Tournamen1Component', () => {
  let component: Tournamen1Component;
  let fixture: ComponentFixture<Tournamen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tournamen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tournamen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
