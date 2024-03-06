import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshighlightsComponent } from './photoshighlights.component';

describe('PhotoshighlightsComponent', () => {
  let component: PhotoshighlightsComponent;
  let fixture: ComponentFixture<PhotoshighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoshighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoshighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
