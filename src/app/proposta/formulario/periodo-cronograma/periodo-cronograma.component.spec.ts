import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoCronogramaComponent } from './periodo-cronograma.component';

describe('PeriodoCronogramaComponent', () => {
  let component: PeriodoCronogramaComponent;
  let fixture: ComponentFixture<PeriodoCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
