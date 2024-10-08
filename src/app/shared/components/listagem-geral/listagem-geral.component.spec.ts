import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGeralComponent } from './listagem-geral.component';

describe('ListagemGeralComponent', () => {
  let component: ListagemGeralComponent;
  let fixture: ComponentFixture<ListagemGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
