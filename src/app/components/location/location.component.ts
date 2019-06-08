import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  zoom: number = 17;
  lat: number = 42.422780;
  lng: number = 27.694410;

  constructor() { }

  ngOnInit() {
  }

}
