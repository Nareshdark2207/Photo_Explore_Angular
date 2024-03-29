import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedetailsComponent } from './imagedetails.component';

describe('ImagedetailsComponent', () => {
  let component: ImagedetailsComponent;
  let fixture: ComponentFixture<ImagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
