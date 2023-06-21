import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.page.html',
  styleUrls: ['./article-card.page.scss'],
})
export class ArticleCardPage implements OnInit {

  articleContent: any
  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.articleContent = navigation?.extras.state?.['data'];
  }

  goBack(){
    this.router.navigate(['/main']);
  }

}
