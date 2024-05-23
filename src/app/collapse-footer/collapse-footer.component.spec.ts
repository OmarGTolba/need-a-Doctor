import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseFooterComponent } from './collapse-footer.component';

describe('CollapseFooterComponent', () => {
  let component: CollapseFooterComponent;
  let fixture: ComponentFixture<CollapseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
