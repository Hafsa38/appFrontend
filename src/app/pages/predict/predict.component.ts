import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  message = '';
  constructor(private httpclient: HttpClient) { }

  payload = {
    Name: '',
    Reserve: 0,
    day_name: '',
    month_name: '',
    Year: 0,
  }

  ngOnInit(): void {
  }

  submitClickHandler() {
    this.httpclient.post('https://prediction-f-app.herokuapp.com/predict', this.payload).subscribe((data: any) => {
      this.message = data.message;
    }
  
    );
  } 
}    

