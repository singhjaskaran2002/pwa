import { Component, OnInit } from "@angular/core";
import { NewsService } from "./news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  news;
  loader = false;
  constructor(private newsService: NewsService) {
    this.getNews();
  }

  ngOnInit() {}

  getNews() {
    this.loader = true;
    this.newsService.getNews().subscribe(news => {
      if (news.status === "ok") {
        this.loader = false;
        this.news = news.articles;
      }
    });
  }
}
