import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private baseUrl: string = 'https://restcountries.eu/rest/v2';


  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]>{
    return this.http.get<PaisSmall[]>(`${this.baseUrl}/region/${region}?fields=alpha3Code;name`);
  }                                                                                                                           


}
