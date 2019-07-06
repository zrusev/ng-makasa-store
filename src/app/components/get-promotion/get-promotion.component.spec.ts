import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPromotionComponent } from './get-promotion.component';

describe('GetPromotionComponent', () => {
  let component: GetPromotionComponent;
  let fixture: ComponentFixture<GetPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
