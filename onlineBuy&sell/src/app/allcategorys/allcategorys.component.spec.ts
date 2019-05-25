import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategorysComponent } from './allcategorys.component';

describe('AllcategorysComponent', () => {
  let component: AllcategorysComponent;
  let fixture: ComponentFixture<AllcategorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcategorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
