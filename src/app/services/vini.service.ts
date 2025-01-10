import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Vino} from '../models/VinoModel';



@Injectable({
  providedIn: 'root'
})
export class ViniService {
  private apiUrl = `${environment.apiUrl}/vini`;

  constructor(private http: HttpClient) {}

  getVini(): Observable<Vino[]> {
    return this.http.get<Vino[]>(this.apiUrl);
  }
}
