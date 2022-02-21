import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneAddComponent } from './champagne-add.component';

describe('ChampagneAddComponent', () => {
  let component: ChampagneAddComponent;
  let fixture: ComponentFixture<ChampagneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
