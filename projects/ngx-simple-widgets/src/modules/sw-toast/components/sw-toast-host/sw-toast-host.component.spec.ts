import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwToastHostComponent } from './sw-toast-host.component';

describe('SwToastHostComponent', () => {
  let component: SwToastHostComponent;
  let fixture: ComponentFixture<SwToastHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwToastHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwToastHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
