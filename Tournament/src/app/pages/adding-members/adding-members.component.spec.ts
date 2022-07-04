import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingMembersComponent } from './adding-members.component';

describe('AddingMembersComponent', () => {
  let component: AddingMembersComponent;
  let fixture: ComponentFixture<AddingMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
