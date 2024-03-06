import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehighlightsComponent } from './storehighlights.component';

describe('StorehighlightsComponent', () => {
  let component: StorehighlightsComponent;
  let fixture: ComponentFixture<StorehighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorehighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
