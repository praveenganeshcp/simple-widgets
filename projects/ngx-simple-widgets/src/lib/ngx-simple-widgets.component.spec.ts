import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleWidgetsComponent } from './ngx-simple-widgets.component';

describe('NgxSimpleWidgetsComponent', () => {
  let component: NgxSimpleWidgetsComponent;
  let fixture: ComponentFixture<NgxSimpleWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
