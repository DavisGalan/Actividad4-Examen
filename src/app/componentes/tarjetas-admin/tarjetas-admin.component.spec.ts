import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasAdminComponent } from './tarjetas-admin.component';

describe('TarjetasAdminComponent', () => {
  let component: TarjetasAdminComponent;
  let fixture: ComponentFixture<TarjetasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
