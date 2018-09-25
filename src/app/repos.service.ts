import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  repos = [];
  getPopularRepos(lang): Observable<any> {
    return this.http
      .get(
        `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`,
      )
      .pipe(catchError(this.handleError('getPopularRepos', [])));
  }

  private logRepos<T>(repos) {
    console.log('hello', repos);
  }
  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
