import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleCardPageRoutingModule } from './article-card-routing.module';

import { ArticleCardPage } from './article-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleCardPageRoutingModule
  ],
  declarations: [ArticleCardPage]
})
export class ArticleCardPageModule {}
