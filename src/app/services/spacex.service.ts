import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http:HttpClient) { }

  getConfig() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100');
  }

}
