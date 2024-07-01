import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsNavComponent } from './us-nav.component';

describe('UsNavComponent', () => {
  let component: UsNavComponent;
  let fixture: ComponentFixture<UsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsNavComponent]
    });
    fixture = TestBed.createComponent(UsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
