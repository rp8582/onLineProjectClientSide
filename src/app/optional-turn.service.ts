import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class OptionalTurn  {

    optionalTurns: any;
    apiUrl="http://localhost:52764/immediateTurn/immediateTurnByCategory";
    constructor(private http: HttpClient) {

    }

    loadOptionalTurns (categoryId,latitude,longitude,mode):Observable<any> {
       return this.http.get<any>(this.apiUrl,{ params: { categoryId: categoryId, latitude: latitude, longitude: longitude, isDriving: mode } })
        
    }

}