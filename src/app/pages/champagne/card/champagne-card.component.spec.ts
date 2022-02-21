import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneCardComponent } from './champagne-card.component';

describe('ChampagneCardComponent', () => {
  let component: ChampagneCardComponent;
  let fixture: ComponentFixture<ChampagneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
