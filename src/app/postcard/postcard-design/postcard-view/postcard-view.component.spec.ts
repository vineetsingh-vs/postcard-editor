import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardViewComponent } from './postcard-view.component';

describe('PostcardViewComponent', () => {
  let component: PostcardViewComponent;
  let fixture: ComponentFixture<PostcardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
