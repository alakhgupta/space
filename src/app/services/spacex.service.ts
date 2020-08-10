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

  getLaunchSuccessData(){

    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true');

  }

  getLaunchFalseData(){

    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=false');

  }

  getLandFalseData(){

    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=false');

  }

  getLandTrueData(){

    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true');

  }

}
