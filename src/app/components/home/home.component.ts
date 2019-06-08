import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides$: Observable<string[]>;
  email: string;
  password: string;

  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    public authService: AuthService) { }

  ngOnInit() {
    this.slides$ = this.http.get<string[]>('../../../assets/images.json', { responseType: 'json' });
  }

  navigate(index: Number) {
    this.navigationService.changeIndex(index);
  }
}
