import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriStateCheckBoxComponent } from './tri-state-check-box.component';

describe('TriStateCheckBoxComponent', () => {
  let component: TriStateCheckBoxComponent;
  let fixture: ComponentFixture<TriStateCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriStateCheckBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriStateCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
