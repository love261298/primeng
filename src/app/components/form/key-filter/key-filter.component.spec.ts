import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFilterComponent } from './key-filter.component';

describe('KeyFilterComponent', () => {
  let component: KeyFilterComponent;
  let fixture: ComponentFixture<KeyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
