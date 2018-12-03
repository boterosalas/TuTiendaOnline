import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTiendaComponent } from './nueva-tienda.component';

describe('NuevaTiendaComponent', () => {
  let component: NuevaTiendaComponent;
  let fixture: ComponentFixture<NuevaTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
