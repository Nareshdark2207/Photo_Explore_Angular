import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightlistComponent } from './highlightlist.component';

describe('HighlightlistComponent', () => {
  let component: HighlightlistComponent;
  let fixture: ComponentFixture<HighlightlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
