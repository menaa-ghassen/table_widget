import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  private api = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }
  getData(libName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + '/books/' + libName);
  }
}
