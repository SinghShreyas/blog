import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/Article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  articles:any[];
  constructor(
    public articleService:ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticle().subscribe(articles => {
      this.articles = articles;
      console.log(this.articles);
      console.log(typeof(articles[0].content));
    });
  }

}
