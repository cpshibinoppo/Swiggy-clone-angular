import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddressComponent } from './editaddress.component';

describe('EditaddressComponent', () => {
  let component: EditaddressComponent;
  let fixture: ComponentFixture<EditaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
