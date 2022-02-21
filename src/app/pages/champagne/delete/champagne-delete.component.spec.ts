import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneDeleteComponent } from './champagne-delete.component';

describe('ChampagneDeleteComponent', () => {
  let component: ChampagneDeleteComponent;
  let fixture: ComponentFixture<ChampagneDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampagneDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampagneDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
