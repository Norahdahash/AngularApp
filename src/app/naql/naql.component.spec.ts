import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaqlComponent } from './naql.component';

describe('NaqlComponent', () => {
  let component: NaqlComponent;
  let fixture: ComponentFixture<NaqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
