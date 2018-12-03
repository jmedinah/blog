import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./post.interface";
import { ApiService } from "../shared/api-service.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;
  postId;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.post$ = this.apiService.getData<Post>("posts");
  }

  clickComments(id) {
    this.postId = id;
    this.apiService.changePostId(id);
  }
}
