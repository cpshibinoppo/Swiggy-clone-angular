import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnabhomeComponent } from './subnabhome.component';

describe('SubnabhomeComponent', () => {
  let component: SubnabhomeComponent;
  let fixture: ComponentFixture<SubnabhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnabhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnabhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
