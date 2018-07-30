import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeMapComponent } from './ae-map.component';

describe('AeMapComponent', () => {
  let component: AeMapComponent;
  let fixture: ComponentFixture<AeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
