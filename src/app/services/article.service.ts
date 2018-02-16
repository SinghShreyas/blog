import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;
  article: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.articles = this.af.list('/homepage') as FirebaseListObservable<Article[]>;
  }

  getArticle(){
    return this.articles;
  }
  addNewArticle(article:Article){
    this.articles.push(article);
  }
  getClient(id: string){
    this.article = this.af.object('/clients/'+id) as FirebaseObjectObservable<Article>;
    return this.article;
  }


}