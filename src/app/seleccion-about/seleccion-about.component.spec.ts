import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionAboutComponent } from './seleccion-about.component';

describe('SeleccionAboutComponent', () => {
  let component: SeleccionAboutComponent;
  let fixture: ComponentFixture<SeleccionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
