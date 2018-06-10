import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
import { RestService } from './api';
import { VisualArt } from '../domain/models';

@Injectable()
export class MeetupsService implements RestService<VisualArt> {

  private handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('MeetupsDao');
  }

  create(model: VisualArt): Observable<VisualArt> {
    console.log(model);
    return this.http.post<VisualArt>('api/meetups', model, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(
        catchError(this.handleError('add', model))
      );
  }

  retrieve(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

  update(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

  remove(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

}
