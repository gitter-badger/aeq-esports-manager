import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdmittanceDetailComponent } from "./admittance-detail.component";

describe('AdmittanceDetailComponent', () => {
  let component: AdmittanceDetailComponent;
  let fixture: ComponentFixture<AdmittanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmittanceDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmittanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
