import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleCardPage } from './article-card.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleCardPageRoutingModule {}
