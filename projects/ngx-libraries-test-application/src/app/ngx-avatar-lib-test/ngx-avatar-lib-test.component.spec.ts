import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAvatarLibTestComponent } from './ngx-avatar-lib-test.component';

describe('NgxAvatarLibTestComponent', () => {
  let component: NgxAvatarLibTestComponent;
  let fixture: ComponentFixture<NgxAvatarLibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAvatarLibTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAvatarLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
