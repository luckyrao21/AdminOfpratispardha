import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOrgainiserComponent } from './one-orgainiser.component';

describe('OneOrgainiserComponent', () => {
  let component: OneOrgainiserComponent;
  let fixture: ComponentFixture<OneOrgainiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOrgainiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOrgainiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
