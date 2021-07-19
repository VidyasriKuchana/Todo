import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptodoComponent } from './comptodo.component';

describe('ComptodoComponent', () => {
  let component: ComptodoComponent;
  let fixture: ComponentFixture<ComptodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
