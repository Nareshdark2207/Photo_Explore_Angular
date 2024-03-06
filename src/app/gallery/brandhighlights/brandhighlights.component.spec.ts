import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandhighlightsComponent } from './brandhighlights.component';

describe('BrandhighlightsComponent', () => {
  let component: BrandhighlightsComponent;
  let fixture: ComponentFixture<BrandhighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandhighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandhighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
