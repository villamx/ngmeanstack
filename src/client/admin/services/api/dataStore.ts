import { Observable } from 'rxjs';

export abstract class DataStore<T> {

  abstract post(model: T): Observable<T>;

  abstract get(model: T): Observable<T>;

  abstract put(model: T): Observable<T>;

  abstract delete(model: T): Observable<T>;

}
