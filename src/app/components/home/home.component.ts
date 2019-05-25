import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides$: Observable<string[]>;
  
  constructor (private http: HttpClient) {
  }
  
  ngOnInit() {
    this.slides$ = this.http
      .get<string[]>('../../../assets/images.json', { responseType: 'json' });
  }
}
