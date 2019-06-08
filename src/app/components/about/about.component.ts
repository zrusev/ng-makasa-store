import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  index: Number;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentIndex.subscribe((ind) => {
      this.index = ind;
    })
  }
};
