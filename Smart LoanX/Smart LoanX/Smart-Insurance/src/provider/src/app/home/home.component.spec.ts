import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing'; // For routing-related tests
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngFor, ngIf
import { By } from '@angular/platform-browser'; // For querying elements in tests

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, CommonModule, RouterTestingModule] // Ensure CommonModule and RouterTestingModule are included
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests for elements and functionality in the component
  it('should display the total loans processed', () => {
    const totalLoansProcessedElement = fixture.debugElement.query(By.css('.metric p')).nativeElement;
    expect(totalLoansProcessedElement.textContent).toBe('120'); // Replace 120 with the value you want to check
  });

  it('should display the correct number of pending loans', () => {
    const pendingLoansElement = fixture.debugElement.queryAll(By.css('.metric p'))[1].nativeElement;
    expect(pendingLoansElement.textContent).toBe('10'); // Assuming there are 10 loans in the simulated data
  });
});
