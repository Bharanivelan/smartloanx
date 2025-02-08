import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsGraphComponent } from './analytics-graph.component';

describe('AnalyticsGraphComponent', () => {
  let component: AnalyticsGraphComponent;
  let fixture: ComponentFixture<AnalyticsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
