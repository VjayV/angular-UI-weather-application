import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Current } from './Current';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  current:Current;
  isShown:boolean;
  isShownH:boolean;
  isShownD:boolean;
  si:string;
  day:String;
  daily;
  text:String;
  hourly=[];
  constructor(private weatherService:WeatherService) {  }

  getCurrent()
  {
    this.weatherService.getCurrent().subscribe
    (
      (res)=>{
        this.isShown=true;
        this.current=JSON.parse(JSON.stringify(res)) 
        this.si="assets/weather image/"+this.current.icon+".png";
        console.log(this.current);
      }
    );
  }


  getHourly()
  {
    this.weatherService.getHourly().subscribe
    (
      (res)=>{
        this.isShown=true;
        this.hourly=JSON.parse(JSON.stringify(res))
        console.log(this.hourly); 
      }
    );
  }

  getDaily(day)
  {
    console.log(day);
    this.day=day;
    this.weatherService.getDaily(day).subscribe
    (
      (res)=>{
        this.isShownD=true;
        this.daily=JSON.parse(JSON.stringify(res)) 
        this.si="assets/weather image/"+this.daily.icon+".png";
        console.log(this.daily);
      }
    );
  }

  setLoc(loc)
  {
    //inside res
    this.weatherService.setLoc(loc).subscribe
    (
      (res)=>
      {
        this.isShownH=true;
        this.text=loc+" is set as the current location";
      }
    )
  }



}
