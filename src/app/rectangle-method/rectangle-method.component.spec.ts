import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleMethodComponent } from './rectangle-method.component';

describe('RectangleMethodComponent', () => {
  let component: RectangleMethodComponent;
  let fixture: ComponentFixture<RectangleMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
