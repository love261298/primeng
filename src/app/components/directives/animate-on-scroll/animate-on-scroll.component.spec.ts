import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateOnScrollComponent } from './animate-on-scroll.component';

describe('AnimateOnScrollComponent', () => {
  let component: AnimateOnScrollComponent;
  let fixture: ComponentFixture<AnimateOnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimateOnScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
