import { Component, OnInit } from "@angular/core";
import { JokesService } from "./jokes.service";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.css"]
})
export class JokesComponent implements OnInit {
  joke;
  constructor(private jokesService: JokesService) {}

  ngOnInit() {
    this.jokesService.getJokes().subscribe(res => {
      this.joke = res.value;
    });
  }

}
