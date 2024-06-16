import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPhotoComponent } from './city-photo.component';

describe('CityPhotoComponent', () => {
  let component: CityPhotoComponent;
  let fixture: ComponentFixture<CityPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
