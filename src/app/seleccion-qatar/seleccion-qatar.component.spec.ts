import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionQatarComponent } from './seleccion-qatar.component';

describe('SeleccionQatarComponent', () => {
  let component: SeleccionQatarComponent;
  let fixture: ComponentFixture<SeleccionQatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionQatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionQatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
