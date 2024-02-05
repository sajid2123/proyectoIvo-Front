import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogoutComponent } from './nav-logout.component';

describe('NavLogoutComponent', () => {
  let component: NavLogoutComponent;
  let fixture: ComponentFixture<NavLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLogoutComponent]
    });
    fixture = TestBed.createComponent(NavLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
