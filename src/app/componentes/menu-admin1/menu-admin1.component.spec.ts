import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmin1Component } from './menu-admin1.component';

describe('MenuAdmin1Component', () => {
  let component: MenuAdmin1Component;
  let fixture: ComponentFixture<MenuAdmin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdmin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAdmin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
