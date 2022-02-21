import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineUpdateComponent } from './wine-update.component';

describe('WineUpdateComponent', () => {
  let component: WineUpdateComponent;
  let fixture: ComponentFixture<WineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
