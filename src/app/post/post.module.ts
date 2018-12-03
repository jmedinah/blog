import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostComponent } from "./post.component";
import { ApiService } from "../shared/api-service.service";
import { CommentModule } from "../comment/comment.module";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, CommentModule],
  providers: [ApiService],
  exports: [PostComponent]
})
export class PostModule {}
