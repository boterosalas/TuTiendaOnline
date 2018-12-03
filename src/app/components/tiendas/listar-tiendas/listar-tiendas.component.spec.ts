import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiendasComponent } from './listar-tiendas.component';

describe('ListarTiendasComponent', () => {
  let component: ListarTiendasComponent;
  let fixture: ComponentFixture<ListarTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
