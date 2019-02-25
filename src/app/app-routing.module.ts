import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JokesComponent } from "./jokes/jokes.component";
import { NewsComponent } from './news/news.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/news", pathMatch: "full" },
  { path: "jokes", component: JokesComponent },
  { path: "news", component: NewsComponent },
  { path: "account", component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
