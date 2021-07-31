import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../model/weatherdata';
import { WeatherData } from '../model/weatherdatalist';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  zipCodeEntryForm!: FormGroup;
  zipcode!: string;
  zipCodeArray: any[] = []; 
  weatherArray: Weather[] = [];
  weatherdatatostore: Weather = new Weather();
  showWeather:any=false;

  constructor(private formbuilder: FormBuilder,public weatherservice:WeatherService) { }
   myClonedArray:any = [];

  ngOnInit(): void {
    this.zipCodeEntryForm = new FormGroup({
      zipcode: new FormControl('', [Validators.required,
        Validators.pattern("^(?!0{3})[0-9]{5}$")
      ])
    });
    this.weatherArray=JSON.parse(window.localStorage.getItem("weatherArray"));
    if(this.weatherArray==null){
      this.weatherArray=[];
    }
    if(this.weatherArray.length>0){
      console.log("wether data is more than 1")
      this.showWeather=true;
    }
    this.zipCodeEntryForm.reset();

  }

  addLocation(): void {
   
    this.weatherservice.getWeatherByZipCode(this.zipcode).subscribe(
      result => {
        this.showWeather=true;
        console.log("----------")
        this.weatherdatatostore=new Weather();
        this.weatherdatatostore.zipcode=this.zipcode;
        this.weatherdatatostore.weathereData=result;
        this.weatherdatatostore.link= 'forecast/' + this.zipcode;
        this.weatherdatatostore.weatherIcon="";

       
        if(this.zipCodeArray.length==0){
        this.zipCodeArray.push(this.zipcode);
        this.weatherArray.push(this.weatherdatatostore); 
        window.localStorage.setItem("weatherArray",JSON.stringify(this.weatherArray));
        this.weatherdatatostore=new Weather();


      }
      else{

        if(!this.zipCodeArray.includes(this.zipcode)){
            this.zipCodeArray.push(this.zipcode);
            this.weatherArray.push(this.weatherdatatostore); 
            window.localStorage.setItem("weatherArray",JSON.stringify(this.weatherArray));
            this.weatherdatatostore=new Weather();
          }
      }

      this.zipCodeEntryForm.reset();

      },
      (error: any) => {
        console.log('error', error);
        alert('No Data Found try For Different Zipcode');
        this.zipCodeEntryForm.reset();
      }
    );


  }

  removecity(index: any,zipcode:any):void{
    this.weatherArray.splice(index, 1);
    window.localStorage.setItem("weatherArray",JSON.stringify(this.weatherArray));
    if(this.zipCodeArray.includes(this.zipcode)){
      this.zipCodeArray=this.zipCodeArray.filter(item => item !== this.zipcode);
    }
  }

}


