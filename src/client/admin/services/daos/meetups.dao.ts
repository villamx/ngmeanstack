import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataStore } from '../api';
import { VisualArt } from '../../domain/models';

@Injectable()
export class MeetupsDao implements DataStore<VisualArt> {
  constructor() { }

  post(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

  get(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

  put(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

  delete(model: VisualArt): Observable<VisualArt> {
    return undefined;
  }

}
