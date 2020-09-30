import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyDJj5k30TQchRIZ6zb6ot2e3xTwrZELToY';

  constructor(private http: HttpClient) {
  }

  getVideos(query: string): Observable <any> {
      const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
      return this.http.get(url)
        .pipe(
          map((response: any) => response.items)
        );
    }

    getVideoStatistics(videoId: string): Observable<any> {
      const url = `https://www.googleapis.com/youtube/v3/videos?key=${this.API_TOKEN}&id=${videoId}&part=snippet,statistics`;
      return this.http.get(url)
        .pipe(
          map((response: any) => response)
        )
    }
}
