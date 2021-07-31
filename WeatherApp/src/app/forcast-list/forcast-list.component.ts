import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherForcast } from '../model/forcastdto';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forcast-list',
  templateUrl: './forcast-list.component.html',
  styleUrls: ['./forcast-list.component.css']
})
export class ForcastListComponent implements OnInit {

  constructor(public router: Router, public arouter: ActivatedRoute, public weatherService: WeatherService) { }
  zipcode: string;
  fiveDaysForcast: any = [];
  weatherForcast: WeatherForcast = new WeatherForcast();
  weatherForecastPage=false;
  ngOnInit(): void {
    this.arouter.params.subscribe(params => {
      this.zipcode = params['id'];
      if (this.zipcode != '' && this.zipcode != null) {
        this.getFiveDateForcastData(this.zipcode);
      }
    });
    this.weatherForecastPage=false;
  }

  getFiveDateForcastData(zipcode): void {
    this.weatherService.getWeatherForecastByZipcode(zipcode).subscribe(result => {
      this.weatherForecastPage=true;
      this.weatherForcast = result;
      this.fiveDaysForcast = this.weatherForcast.list
    },
      (error: any) => {
        console.log('error', error);
      }
    );

  }

  gotohome(): void {
    console.log("home page");
    this.router.navigateByUrl('');
  }
}
