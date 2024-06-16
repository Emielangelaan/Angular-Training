import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsreisinfoComponent } from './nsreisinfo.component';

describe('NsreisinfoComponent', () => {
  let component: NsreisinfoComponent;
  let fixture: ComponentFixture<NsreisinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NsreisinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NsreisinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
