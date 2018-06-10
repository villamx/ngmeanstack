import { Observable } from 'rxjs';

export abstract class RestService<T> {

  abstract create(model: T): Observable<T>;

  abstract retrieve(model: T): Observable<T>;

  abstract update(model: T): Observable<T>;

  abstract remove(model: T): Observable<T>;

}
