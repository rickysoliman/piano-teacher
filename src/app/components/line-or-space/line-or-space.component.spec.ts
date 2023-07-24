import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOrSpaceComponent } from './line-or-space.component';

describe('LineOrSpaceComponent', () => {
  let component: LineOrSpaceComponent;
  let fixture: ComponentFixture<LineOrSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOrSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineOrSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
