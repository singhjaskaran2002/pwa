import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=877033b87e114ec78c107177fe97fb67"
    );
  }
}
