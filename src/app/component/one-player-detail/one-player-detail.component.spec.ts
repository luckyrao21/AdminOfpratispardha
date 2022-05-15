import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlayerDetailComponent } from './one-player-detail.component';

describe('OnePlayerDetailComponent', () => {
  let component: OnePlayerDetailComponent;
  let fixture: ComponentFixture<OnePlayerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePlayerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
