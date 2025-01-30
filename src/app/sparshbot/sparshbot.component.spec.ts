import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparshbotComponent } from './sparshbot.component';

describe('SparshbotComponent', () => {
  let component: SparshbotComponent;
  let fixture: ComponentFixture<SparshbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparshbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparshbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
