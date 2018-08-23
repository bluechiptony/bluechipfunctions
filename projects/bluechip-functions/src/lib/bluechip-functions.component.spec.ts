import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluechipFunctionsComponent } from './bluechip-functions.component';

describe('BluechipFunctionsComponent', () => {
  let component: BluechipFunctionsComponent;
  let fixture: ComponentFixture<BluechipFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluechipFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluechipFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
