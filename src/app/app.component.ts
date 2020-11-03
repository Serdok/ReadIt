import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ReadIt';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 10),
      new Article('React', 'https://reactjs.org', 5),
      new Article('Vue', 'https://vuejs.org', 1)
    ];
  }

  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
    this.articles.push(new Article(newTitle.value, newLink.value));
    newTitle.value = '';
    newLink.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
