import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http:HttpClient) { }
  
  
  getCurrent()
  {
    return this.http.get("http://localhost:8080/getCurrent");
  }
  getDaily(day) 
  {
    const url="http://localhost:8080/getDaily?day="+day;
    return this.http.get(url);
  }
  setLoc(loc)
  {
    const url="http://localhost:8080//setLoc?loc="+loc;
    return this.http.get(url);
  }
  getHourly()
  {
    return this.http.get("http://localhost:8080/getHourly");
  }

}
