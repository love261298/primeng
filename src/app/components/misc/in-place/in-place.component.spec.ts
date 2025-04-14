import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPlaceComponent } from './in-place.component';

describe('InPlaceComponent', () => {
  let component: InPlaceComponent;
  let fixture: ComponentFixture<InPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
