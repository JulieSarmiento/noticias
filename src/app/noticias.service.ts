import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoticiasService {
    private noticiasUrl = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=5515e583de1f4b30bfe794dd62f5e80d';
    public noticiaToSend = null;
    
    constructor( private http: HttpClient) {}       

    getNews() {
      return this.http.get( this.noticiasUrl ).pipe();
    }
    /*private handleError<T> ( operation = 'operation', result ? : T ); {
        return (error: any): Observable<T> => {
            console.error('something went wrong', error);
            return of ( result as T );
        };
    }*/
}