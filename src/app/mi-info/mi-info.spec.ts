import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiInfo } from './mi-info';

describe('MiInfo', () => {
  let component: MiInfo;
  let fixture: ComponentFixture<MiInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
