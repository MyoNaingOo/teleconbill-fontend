import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbillsComponent } from './userbills.component';

describe('UserbillsComponent', () => {
  let component: UserbillsComponent;
  let fixture: ComponentFixture<UserbillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserbillsComponent]
    });
    fixture = TestBed.createComponent(UserbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
