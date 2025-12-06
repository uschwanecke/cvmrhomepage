import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchElementComponent } from './research-element.component';

describe('ResearchElementComponent', () => {
  let component: ResearchElementComponent;
  let fixture: ComponentFixture<ResearchElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
