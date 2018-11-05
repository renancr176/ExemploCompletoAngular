import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaComponentOld } from './proposta-old.component';

describe('PropostaComponent', () => {
  let component: PropostaComponentOld;
  let fixture: ComponentFixture<PropostaComponentOld>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaComponentOld ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaComponentOld);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
