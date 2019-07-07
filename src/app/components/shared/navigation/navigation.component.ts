import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent { 
  constructor(private navigationService: NavigationService) { }

  navigate(index: number) {
    this.navigationService.changeIndex(index);
  }
}
