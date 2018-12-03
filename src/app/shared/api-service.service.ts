import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(environment.apiURL + url);
  }

  private postId = new BehaviorSubject("");
  currentPostId = this.postId.asObservable();

  changePostId(id: string) {
    this.postId.next(id);
  }
}
