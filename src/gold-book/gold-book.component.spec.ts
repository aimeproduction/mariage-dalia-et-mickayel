import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBookComponent } from './gold-book.component';

describe('GoldBookComponent', () => {
  let component: GoldBookComponent;
  let fixture: ComponentFixture<GoldBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
