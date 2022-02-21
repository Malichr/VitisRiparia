import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneUpdateComponent } from './champagne-update.component';

describe('ChampagneUpdateComponent', () => {
  let component: ChampagneUpdateComponent;
  let fixture: ComponentFixture<ChampagneUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
