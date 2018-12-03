import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "./comment.interface";
import { Observable } from "rxjs";
import { ApiService } from "../shared/api-service.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  comments$: Observable<Comment>;

  // @Input() comments$: Observable<Comment[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.currentPostId.subscribe(id => this.getComments(id));
    // console.log(this.comments$);
  }

  getComments(id) {
    console.log(id);
    this.comments$ = this.apiService.getData<Comment>("comments?postId=" + id);
  }
}
