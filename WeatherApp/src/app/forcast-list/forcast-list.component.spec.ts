import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastListComponent } from './forcast-list.component';

describe('ForcastListComponent', () => {
  let component: ForcastListComponent;
  let fixture: ComponentFixture<ForcastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
