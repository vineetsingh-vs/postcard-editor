import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardPreviewComponent } from './postcard-preview.component';

describe('PostcardPreviewComponent', () => {
  let component: PostcardPreviewComponent;
  let fixture: ComponentFixture<PostcardPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcardPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
