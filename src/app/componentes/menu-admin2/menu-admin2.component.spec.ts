import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmin2Component } from './menu-admin2.component';

describe('MenuAdmin2Component', () => {
  let component: MenuAdmin2Component;
  let fixture: ComponentFixture<MenuAdmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdmin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
