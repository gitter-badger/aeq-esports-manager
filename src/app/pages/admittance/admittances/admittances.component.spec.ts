import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdmittancesComponent } from "./admittances.component";

describe('AdmittancesComponent', () => {
  let component: AdmittancesComponent;
  let fixture: ComponentFixture<AdmittancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmittancesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
