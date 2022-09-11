import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewaddressComponent } from './addnewaddress.component';

describe('AddnewaddressComponent', () => {
  let component: AddnewaddressComponent;
  let fixture: ComponentFixture<AddnewaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
