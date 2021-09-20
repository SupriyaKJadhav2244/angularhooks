import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectivesComponent } from './derectives.component';

describe('DerectivesComponent', () => {
  let component: DerectivesComponent;
  let fixture: ComponentFixture<DerectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
