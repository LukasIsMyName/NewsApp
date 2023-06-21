import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  feedCards: Observable<any> | undefined
  articles: any
  
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.feedCards = this.api.getFeed();
    this.feedCards.subscribe(
      (articles: any) => 
      {
		    this.articles = articles.articles;
		  },
		  error => 
      {
		    console.log(error);
		  })
  }
  openArticle(article: any){
    this.router.navigate(['/article-card'], { state: { data: article } });
  }

}
