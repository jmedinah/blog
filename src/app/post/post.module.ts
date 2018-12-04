import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostComponent } from "./post.component";
import { ApiService } from "../shared/api-service.service";
import { CommentModule } from "../comment/comment.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, CommentModule, MatCardModule, MatButtonModule],
  providers: [ApiService],
  exports: [PostComponent]
})
export class PostModule {}
