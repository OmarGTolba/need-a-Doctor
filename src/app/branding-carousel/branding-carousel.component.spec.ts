import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingCarouselComponent } from './branding-carousel.component';

describe('BrandingCarouselComponent', () => {
  let component: BrandingCarouselComponent;
  let fixture: ComponentFixture<BrandingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandingCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
