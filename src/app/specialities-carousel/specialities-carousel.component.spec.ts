import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitiesCarouselComponent } from './specialities-carousel.component';

describe('SpecialitiesCarouselComponent', () => {
  let component: SpecialitiesCarouselComponent;
  let fixture: ComponentFixture<SpecialitiesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialitiesCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialitiesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
