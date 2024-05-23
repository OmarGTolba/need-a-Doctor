import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackCarouselComponent } from './slack-carousel.component';

describe('SlackCarouselComponent', () => {
  let component: SlackCarouselComponent;
  let fixture: ComponentFixture<SlackCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlackCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlackCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
