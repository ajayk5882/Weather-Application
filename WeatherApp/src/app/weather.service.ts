import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private weatherApiUrl: string ='https://api.openweathermap.org/data/2.5/weather?q=';
private apiKey = '&units=metric&appid=5a4b2d457ecbef9eb2a71e480b947604';
private forecastApiUrl ='https://api.openweathermap.org/data/2.5/forecast/daily?zip=';
constructor(private httpClient: HttpClient) {}

getWeatherByZipCode(zipcode: any): Observable<any> {
  let url = this.weatherApiUrl + zipcode + ',us' + this.apiKey;
  return this.httpClient.get(url);
}
getWeatherForecastByZipcode(zipcode: any): Observable<any> {
  let url = this.forecastApiUrl + zipcode + ',us&cnt=5' + this.apiKey;
  return this.httpClient.get(url);
}
}
