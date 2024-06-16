import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationskaartComponent } from './stationskaart.component';

describe('StationskaartComponent', () => {
  let component: StationskaartComponent;
  let fixture: ComponentFixture<StationskaartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationskaartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationskaartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
