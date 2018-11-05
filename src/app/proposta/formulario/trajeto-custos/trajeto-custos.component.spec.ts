import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoCustosComponent } from './trajeto-custos.component';

describe('TrajetoCustosComponent', () => {
  let component: TrajetoCustosComponent;
  let fixture: ComponentFixture<TrajetoCustosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoCustosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
