import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflCardComponent } from './nfl-card.component';

describe('NflCardComponent', () => {
  let component: NflCardComponent;
  let fixture: ComponentFixture<NflCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
