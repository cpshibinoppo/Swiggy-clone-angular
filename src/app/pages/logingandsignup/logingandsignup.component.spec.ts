import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingandsignupComponent } from './logingandsignup.component';

describe('LogingandsignupComponent', () => {
  let component: LogingandsignupComponent;
  let fixture: ComponentFixture<LogingandsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogingandsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogingandsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
