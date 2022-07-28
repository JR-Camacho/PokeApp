import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPokeComponent } from './info-poke.component';

describe('InfoPokeComponent', () => {
  let component: InfoPokeComponent;
  let fixture: ComponentFixture<InfoPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
