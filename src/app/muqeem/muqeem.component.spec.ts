import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuqeemComponent } from './muqeem.component';

describe('MuqeemComponent', () => {
  let component: MuqeemComponent;
  let fixture: ComponentFixture<MuqeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuqeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuqeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
