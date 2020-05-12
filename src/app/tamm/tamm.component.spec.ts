import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TammComponent } from './tamm.component';

describe('TammComponent', () => {
  let component: TammComponent;
  let fixture: ComponentFixture<TammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
