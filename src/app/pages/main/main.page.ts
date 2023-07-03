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
  feedCards: Observable<any> | undefined;
  articles: any;
  currentTime: any;
  
  constructor(private api: ApiService, private router: Router) {}


  // Creates a dynamic Date object and sets hours, minutes
  //to a variable currentTime which as a type of: any
  updateCurrentTime(){

    const now = new Date();
    //Fixes the problem of not having a 0 before and/or after
    // e.g. 10:3 => 10:03 etc.
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
  

    this.currentTime = `${hours}:${minutes}`;
  }


  ngOnInit() {
    
    // Returns Time and updates it every 1000ms
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 1000);

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
