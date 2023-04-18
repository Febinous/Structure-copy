import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibReusablesComponent } from './lib-reusables.component';

describe('LibReusablesComponent', () => {
  let component: LibReusablesComponent;
  let fixture: ComponentFixture<LibReusablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibReusablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibReusablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
