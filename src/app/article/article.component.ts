import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  upVote(): boolean {
    this.article.upVote();
    return false; // Block refresh
  }

  downVote(): boolean {
    this.article.downVote();
    return false; // Block refresh
  }
}
