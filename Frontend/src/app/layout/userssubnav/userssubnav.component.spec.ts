import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserssubnavComponent } from './userssubnav.component';

describe('UserssubnavComponent', () => {
  let component: UserssubnavComponent;
  let fixture: ComponentFixture<UserssubnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserssubnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserssubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
