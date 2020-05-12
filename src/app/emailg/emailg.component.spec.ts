import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailgComponent } from './emailg.component';

describe('EmailgComponent', () => {
  let component: EmailgComponent;
  let fixture: ComponentFixture<EmailgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
