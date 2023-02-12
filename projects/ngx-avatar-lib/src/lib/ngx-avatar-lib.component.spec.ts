import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAvatarLibComponent } from './ngx-avatar-lib.component';

describe('NgxAvatarLibComponent', () => {
  let component: NgxAvatarLibComponent;
  let fixture: ComponentFixture<NgxAvatarLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAvatarLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAvatarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
