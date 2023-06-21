import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCardPage } from './article-card.page';

describe('ArticleCardPage', () => {
  let component: ArticleCardPage;
  let fixture: ComponentFixture<ArticleCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
