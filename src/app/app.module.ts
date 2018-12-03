import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PostModule } from "./post/post.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PostModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
