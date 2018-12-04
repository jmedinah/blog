import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentComponent } from "./comment.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule],
  exports: [CommentComponent]
})
export class CommentModule {}
