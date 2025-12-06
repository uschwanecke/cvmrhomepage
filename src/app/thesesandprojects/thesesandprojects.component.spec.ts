import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesesandprojectsComponent } from './thesesandprojects.component';

describe('ThesesandprojectsComponent', () => {
  let component: ThesesandprojectsComponent;
  let fixture: ComponentFixture<ThesesandprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesesandprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesesandprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
