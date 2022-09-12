import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotloginComponent } from './notlogin.component';

describe('NotloginComponent', () => {
  let component: NotloginComponent;
  let fixture: ComponentFixture<NotloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
