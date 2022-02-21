import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneListComponent } from './champagne-list.component';

describe('ChampagneListComponent', () => {
  let component: ChampagneListComponent;
  let fixture: ComponentFixture<ChampagneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
